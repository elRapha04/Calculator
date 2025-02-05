var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var link = url.parse(req.url, true);
    var filename = '.' + link.pathname;
    fs.readFile(filename, function(err, data){
      res.writeHead(200, {"content-type":"text/html"});
      res.write(data);
      return res.end('shesh');
    });
  })
  .listen(1234);
