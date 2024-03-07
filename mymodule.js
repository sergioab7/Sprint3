const fs = require("node:fs/promises");
const path = require("path");

function readDirectory(directory, extension, callback) {
    fs.readdir(directory, (err,files) => {
        if(err) throw err;
        
        const filteresFiles = files.filter(file => path.extname(file) === `.${extension}`);
        callback(null, filteresFiles);
    })
}

module.exports = readDirectory;