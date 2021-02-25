const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('ayam')
})

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
})