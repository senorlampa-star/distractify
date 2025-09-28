from flask import Flask, request, jsonify
import openai
import pandas as pd
import cv2
import os

app = Flask(__name__)
openai.api_key = "OVDJE_STAVI_SVOJ_API_KLJUČ"

@app.route("/api/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message", "")
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_input}]
    )
    return jsonify({"reply": response.choices[0].message.content})

@app.route("/api/csv", methods=["GET"])
def csv_data():
    df = pd.read_csv("data/football.csv")
    summary = df.groupby("FTR").size().to_dict()
    return jsonify(summary)

@app.route("/api/image", methods=["POST"])
def image_analysis():
    file = request.files["image"]
    filepath = os.path.join("static/images", file.filename)
    file.save(filepath)

    image = cv2.imread(filepath)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    edged = cv2.Canny(blurred, 50, 150)
    contours, _ = cv2.findContours(edged, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    shape_count = len(contours)

    return jsonify({"shapes_detected": shape_count})

if __name__ == "__main__":
    app.run(port=5000)