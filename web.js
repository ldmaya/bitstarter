var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    console.log(data);
    var res = data;
    if(res.isBuffer) {
      res = res.toString();
    }
    response.send(res);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
