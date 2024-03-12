const express = require('express');

const app = express();
const jokes= ['123131','adfjk']
const verse=['','']
app.get('/', (req,res) => {
  res.json("Welcome to my server")
})
app.get('/jokes', (req,res) => {
  res.json(jokes[1])
})

app.listen(8000)