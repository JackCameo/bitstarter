var express = require('express');
var app = express();
var fs = require('fs');
fs.readFileSync('index.html', 'utf-8', function (err,data){
    if (err) {
	return console.log(err);
    }
    console.log(data);
});

app.use(express.logger());

app.get('/', function(request, response) {
  response.send();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
