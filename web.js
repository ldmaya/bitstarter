var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var res = 'not back yet';
/* * /
fs.readFile('index.html', function (err, data) {
  console.log("Read file callback executed");
  if (err) {
    console.log("Could not read file" + err);
    return;
  }
  res = data;
  if(res.isBuffer) {
    res = res.toString();
  }
  console.log("The result from the read is: " + res);
}
/* */

app.get('/', function(request, response) {
    response.send('hola mundo');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
