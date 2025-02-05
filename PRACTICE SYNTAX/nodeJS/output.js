var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, {"content-type":"text/html"});
    res.write("Hello world + date!! (nodeJS)");
    var now = url.parse(req.url, true).query;
    var text = now.year + "" + now.month;
    res.write(text);
    res.end();
  })
  .listen(8080);
