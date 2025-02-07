var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {"content-type": "text/html"});
  res.write("hello world ndoe");
  res.end("end of task");
}).listen(4321);