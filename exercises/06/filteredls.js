// Filter files in dir by extension.

var fs = require('fs'),
    path = require('path');

module.exports = function (dirname, extension, cb) {
    extension = "." + extension;
    fs.readdir(dirname, function (err, filenames) {
        var filteredFilenames = [];
        if (err)
            return cb(err);

        filenames.forEach(function (filename) {
            if (path.extname(filename) === extension)
                filteredFilenames.push(filename);
        });

        return cb(null, filteredFilenames);
    });
};
