const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));

app.post('/', (req, res) => {
  console.log(req.body);
  res.json({ status: 'ok' });
});

app.listen(4444, () => console.log('Server running on http://localhost:4444'));