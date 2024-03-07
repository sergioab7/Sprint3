const readDirectory = require('./mymodule');


const ruta = process.argv[2];
const extension = process.argv[3];


readDirectory(ruta,extension, (err,files) => {
    if(err) throw err;

    files.forEach(file => {
        console.log(file);
    })
})