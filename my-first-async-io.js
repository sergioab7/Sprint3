const fs = require("node:fs");

if(process.argv.length<3){
    console.log("Error. Debes poner un fichero.");
}

const archivo = process.argv[2];
try{
    fs.readFile(archivo, "utf8", (err,leer) => {
        if(err){
            console.log("Error: ", err);
        }

        let contarLineas = leer.toString().split('\n').length - 1;
        console.log(contarLineas);
    })


}catch(e){
    console.log("Error: ", e);
}