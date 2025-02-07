var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file">');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end('task succsheesh');
  })
  .listen(2004);
