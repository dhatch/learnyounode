// David Hatch
// 1/24/15
//
// learnyounode - Exercise 5 - Filtered LS
//
// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files.  You will be provided a directory
// name as the first argument to your program and a file extension to filter
// by as the second argument.
//
// For example, if you get 'txt' as the second argument then you will need to
// filter the list to only files that end with .txt. Note that the second
// argument will not come prefixed with a '.'.
//
// The list of files should be printed to the console, one file per line.
//
// You must use asynchronous I/O.

var fs = require('fs'),
    path = require('path'),
    dirname = process.argv[2],
    extension = '.' + process.argv[3];

fs.readdir(dirname, function (err, filenames) {
    if (err) {
        console.log("ERROR", err);
        process.exit(1);
    }

    filenames.forEach(function (filename) {
        if (path.extname(filename) === extension)
            console.log(filename);
    });
});
