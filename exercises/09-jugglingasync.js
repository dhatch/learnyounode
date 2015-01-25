// David Hatch
// 1/24/15
//
// learnyounode - Exercise 9 - Juggling Async
//
// This problem is the same as the previous problem (HTTP COLLECT) in that you
// need to use http.get(). However, this time you will be provided with three
// URLs as the first three command-line arguments.
//
// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
// command-line arguments.

var http = require('http'),
    bl   = require('bl'),
    urls  = process.argv.slice(2);

// Establish a data structure for storing responses.
var urlResponses = urls.map(function (url) {
    return {
        'url': url,
        'response': null
    };
});

// Return true if all responses arrived.
urlResponses.allDone = function () {
    for (var i = 0; i < this.length; i++) {
        if (this[i].response === null)
            return false;
    }
    return true;
};

// Triggered on completed fetch of all urls.
var completedFetch = function (responses) {
    urlResponses.forEach(function (response) {
        console.log(response.response);
    });
};

// Begin fetches for each url.
urlResponses.forEach(function (url) {
    http.get(url.url, function (response) {
        // When the response arrives,
        // store it.
        response.pipe(bl(function (err, data) {
            if (err) {
                console.error(err);
                process.exit(1);
            }

            url.response = data.toString();

            // Check if all are complete.
            if (urlResponses.allDone())
                completedFetch(urlResponses);

        }));
    });
});
