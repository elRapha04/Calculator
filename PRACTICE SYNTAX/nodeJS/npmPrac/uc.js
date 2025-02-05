var uc = require("upper-case");
var http = require("http");

http
  .createServer(function (req, res) {
    var text = "Hello world in upper case!!!";
    var uctxt = uc.upperCase(text);
    res.writeHead(200, { "content-type": "text/html" });
    res.end(uctxt);
  })
  .listen(1234);
