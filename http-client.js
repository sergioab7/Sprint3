const http = require('node:http');


if(process.argv.length !== 3){
    console.log("Debes poner los parametros correctamente.");
}else{
    const url = process.argv[2];
    
    http.get(url, respuesta => {
        respuesta.setEncoding('utf-8');

        respuesta.on('data', chunk => {
            console.log(chunk);
        })

        respuesta.on('error', e => {
            console.log(e);
        })
    }).on('error', e =>{
        console.log(e);
    })
}

