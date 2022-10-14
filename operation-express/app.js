var express = require('express');
var path = require('path');

var cors = require('cors');
var app = express();
var dataRouter = require('./routes/data');

app.use(cors());
app.use('/data', dataRouter);
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

module.exports = app;
