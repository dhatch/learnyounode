// David Hatch
// 1/24/15
//
// learnyounode - Exercise 12 - HTTP Uppercaser
//
// Write an HTTP server that receives only POST requests and converts incoming
// POST body characters to upper-case and returns it to the client.
//
// Your server should listen on the port provided by the first argument to your
// program.

var http = require('http'),
    map  = require('through2-map');

var server = http.createServer(function (req, resp) {
    if (req.method !== 'POST') {
        resp.writeHead(405);
        return;
    }

    resp.writeHead(200, { 'Content-type' : 'text/plain' });
    req.pipe(map(function (chunk) { return chunk.toString().toUpperCase(); }))
       .pipe(resp);
});

server.listen(process.argv[2]);
