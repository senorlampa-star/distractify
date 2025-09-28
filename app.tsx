import { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');
  const [reply, setReply] = useState('');
  const [csv, setCsv] = useState('');
  const [shapes, setShapes] = useState('');

  const send = async () => {
    const r = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });
    const d = await r.json();
    setReply(d.reply);
  };

  const loadCSV = async () => {
    const r = await fetch("http://localhost:5000/csv");
    const d = await r.json();
    setCsv(JSON.stringify(d));
  };

  const upload = async (e: any) => {
    const f = new FormData();
    f.append("image", e.target.files[0]);
    const r = await fetch("http://localhost:5000/image", { method: "POST", body: f });
    const d = await r.json();
    setShapes(`Shapes: ${d.shapes}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Distractify</h1>
      <textarea value={msg} onChange={e => setMsg(e.target.value)} rows={4} cols={50} />
      <br /><button onClick={send}>Pošalji AI-u</button>
      <p>{reply}</p>
      <hr />
      <button onClick={loadCSV}>Učitaj CSV</button>
      <p>{csv}</p>
      <hr />
      <input type="file" onChange={upload} />
      <p>{shapes}</p>
    </div>
  );
}

export default App;