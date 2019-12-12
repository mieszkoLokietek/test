var express = require('express');
var app = express();
app.get('/publicAPI/user/messageFeed/:user', function (req, res) {
  res.send('eloszka');
});
