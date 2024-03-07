const fs = require("node:fs");


if(process.argv.length<3){
    console.log("Error, debes poner fichero!");
}

const fichero = process.argv[2];

try{
    if(fichero){
        const lineas = fs.readFileSync(fichero, "utf8");
        const numLineas = lineas.toString().split('\n').length - 1;
        console.log(numLineas);
    }else{
        console.log("Debes poner un fichero correcto.");
    }
}catch(e){
    console.log("Error: ", e);
}