// David Hatch
// 1/24/15
//
// learnyounode - Exercise 3 - My First I/O
//
// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc - l.
//
// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs'),
    args = process.argv.slice(2),
    filename = args[0];

// File contents, converted to string, assuming utf8 encoding.
var fileContents = fs.readFileSync(filename).toString(),
    lines = 0;

for (var idx = 0, character; idx < fileContents.length; idx++) {
    character = fileContents.charAt(idx);
    if (character == '\n')
        lines++;
}

console.log(lines);
