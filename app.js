const root = document.getElementById('root');

const quote = document.createElement('blockquote');
quote.innerText = "ADHD motto: “Why do today what you can obsess over at 3 a.m. instead?”";

const button = document.createElement('button');
button.innerText = "Pošalji na server";
button.onclick = async () => {
  const res = await fetch('http://localhost:4444', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'client={"client":"client1","component":"component1","page":"page1","light":0.5}'
  });
  const data = await res.json();
  alert("Server kaže: " + data.status);
};

root.appendChild(quote);
root.appendChild(button);