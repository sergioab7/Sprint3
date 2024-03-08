const fs = require('fs');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            return callback(err); 
        }

        const filteredFiles = files.filter(file => file.endsWith('.' + extension));
        callback(null, filteredFiles);
    });
};
