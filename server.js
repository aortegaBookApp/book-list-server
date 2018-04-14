const express = require('express');
const PORT = process.env.PORT;

const app = express();

app.get('/test', (req, res) => 
  res.send('hello world'));

app.listen(PORT, () => console.log('Listening on PORT', PORT));