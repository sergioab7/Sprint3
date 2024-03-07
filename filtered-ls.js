const fs = require('node:fs/promises');

// if(process.argv.length!=4){
//     console.log("Debes tener los parámetros necesarios");
//     return;
// }


const ruta = process.argv[2];
const extension = process.argv[3];
const archivos = [];


try{
    fs.readdir(ruta)
        .then(files => {
            archivos.push(...files);
            mostrarArchivosConExtension(archivos);
        })
        .catch(err => {
            console.log("Error: ", err);
        });
}catch(e){
    console.log(e);
}

function mostrarArchivosConExtension(archivos){
    //Recordatorio: Con import path es mucho mejor, para evitar esto y hacerlo en una sola linea
    archivos.forEach(archivo => {
        if(archivo.endsWith('.' + extension)){
            console.log(archivo);
        }
    })
}