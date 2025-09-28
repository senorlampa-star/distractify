import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [csv, setCsv] = useState('');
  const [shapes, setShapes] = useState('');

  const sendMessage = async () => {
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setReply(data.reply);
  };

  const getCsv = async () => {
    const res = await fetch("http://localhost:5000/api/csv");
    const data = await res.json();
    setCsv(JSON.stringify(data));
  };

  const uploadImage = async (e: any) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const res = await fetch("http://localhost:5000/api/image", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    setShapes(`Shapes detected: ${data.shapes_detected}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Distractify</h1>

      <textarea
        placeholder="Poruka za AI"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={sendMessage}>Pošalji AI-u</button>
      <p><strong>Odgovor:</strong> {reply}</p>

      <hr />

      <button onClick={getCsv}>Analiziraj CSV</button>
      <p>{csv}</p>

      <hr />

      <input type="file" onChange={uploadImage} />
      <p>{shapes}</p>
    </div>
  );
}

export default App;