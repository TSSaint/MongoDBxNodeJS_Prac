// init server with builtin 
var http = require('http');

var server = http.createServer(function(req, res) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello, world!"\n);
});

server.listen(8000);

console.log("Server running on PORT 8000");
