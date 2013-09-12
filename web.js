var express = require('express');
var app = express();
var fs = require('fs');
var htmlfile = "index.html";

var index = fs.readFileSync('index.html', 'utf-8', function (err,data){
    if (err) {
	return console.log(err);
    }
    console.log(data);
});

var buffer = new Buffer(index, 'utf-8');

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
