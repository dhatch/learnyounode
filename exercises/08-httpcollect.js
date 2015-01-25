// David Hatch
// 1/24/15
//
// learnyounode - Exercise 8 Http Collect
//
// Write a program that performs an HTTP GET request to a URL provided
// to you as the first command-line argument. Collect all data from the
// server (not just the first "data" event) and then write two lines to
// the console (stdout).

var http = require('http'),
    bl   = require('bl'),
    url  = process.argv[2];

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.log(err);

        var respContent = data.toString();
        console.log(respContent.length);
        console.log(respContent);
    }));
});
