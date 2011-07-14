var clutch = require('clutch');

function helloSomeone(req, res, name) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello ' + name + '!\n');
}

function helloWorld(req, res) {
  helloSomeone(req, res, 'World');
}

exports.urls = clutch.route404([
  ['GET /hello/(\\w+)$', helloSomeone],
  ['GET /hello$', helloWorld]
]);
