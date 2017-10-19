// init server with builtin 
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello, world!");
});

server.listen(8000);

console.log("Server running on PORT 8000");
