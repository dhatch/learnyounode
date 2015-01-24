// David Hatch
// 1/24/15
//
// learnyounode - Exercise 4 - My first async I/O
//
// Write a program taht uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs'),
    args = process.argv.slice(2),
    filename = args[0];

fs.readFile(filename, 'utf8', function (error, contents) {
    if (error) {
        console.log("ERROR", err);
        process.exit(1);
    }

    var count = 0;
    for (var i = 0, character; i < contents.length; i++) {
        character = contents[i];
        if (character == '\n')
            count++;
    }

    console.log(count);
});
