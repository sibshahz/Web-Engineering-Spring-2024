const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Semester VI server')
})
app.get('/joke', function (req, res) {
  res.send('This was a funny joke')
})

app.listen(3000)