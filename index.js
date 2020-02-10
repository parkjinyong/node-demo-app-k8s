var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(${TEST_MESSAGE});
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});
