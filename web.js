var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var res = 'not back yet';
/* * /
/* */

app.get('/', function(request, response) {
  var res = fs.readFileSync('index.html');
  console.log("The result from the read is: " + res.toString());
  response.send(res.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
