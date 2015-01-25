// David Hatch
// 1/24/15
//
// learnyounode - Exercise 6 - Make It Modular

var filteredls = require('./filteredls'),
    dirname    = process.argv[2],
    extension  = process.argv[3];

filteredls(dirname, extension, function (err, data) {
    if (err)
        return console.log("ERROR", err);

    data.forEach(function (filename) {
        console.log(filename);
    });
});
