const mymodule = require('./mymodule.js');

const directory = process.argv[2];
const extension = process.argv[3];

if (!directory || !extension) {
    console.error('Pls, pon un directorio y una extension.');
    process.exit(1);
}

mymodule(directory, extension, (err, files) => {
    if (err) {
        console.error('Error:', err);
    } else {
        files.forEach(file => console.log(file));
    }
});
