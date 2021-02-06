var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var filename = `.${q.pathname}`;

  if (filename === './') {
    filename = './index';
  }

  fs.readFile(`${filename}.html`, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      })
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080, () => console.log('Served!'));