var webpack = require('webpack');
var express = require('express');

var app = new express();
var port = 8090;

app.use('/static', express.static('static'));

app.use(function(req, res) {
  res.sendFile(__dirname + '/static/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
