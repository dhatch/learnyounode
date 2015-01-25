// David Hatch
// 1/24/15
//
//
// Write an HTTP server that serves JSON data when it receives a GET request to
// the path '/api/parsetime'. Expect the request to contain a query string with a
// key 'iso' and an ISO-format time as the value.
//
// For example:
//
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
// The JSON response should contain only 'hour', 'minute' and 'second' properties.
// For example:
//
// {
// "hour": 14,
// "minute": 23,
// "second": 15
// }

// Add second endpoint for the path '/api/unixtime' which accepts the same query
// string but returns UNIX epoch time in milliseconds (the number of
// milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.

// For example:

// { "unixtime": 1376136615474 }

// Your server should listen on the port provided by the first argument to
// your program.

var http = require('http'),
    url  = require('url');

var server = http.createServer(function (req, resp) {
    // Route request
    var urlParts = url.parse(req.url, true);
    if (urlParts.pathname === '/api/parsetime') {
        var date = new Date(urlParts.query.iso);
        resp.writeHead(200, { 'Content-type': 'application/javascript' });
        resp.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    } else if (urlParts.pathname === '/api/unixtime') {
        var time = new Date(urlParts.query.iso).getTime();
        resp.writeHead(200, { 'Content-type': 'application/javascript' });
        resp.write(time);
    } else {
        resp.writeHead(400, 'Bad request.', { 'Content-type': 'text/plain' });
    }
    resp.end();
});

server.listen(process.argv[2]);
