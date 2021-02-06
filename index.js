const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static('public'));

/*
app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
})
*/

app.listen(port, () => console.log(`Serving on ${port}`))

/*
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
*/