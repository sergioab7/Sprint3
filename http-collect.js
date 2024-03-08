const http = require("node:http");

const url = process.argv[2];

http.get(url, respuesta => {
    let losdatos = '';
    respuesta.on('data', datos => {
        losdatos += datos;
    })

    respuesta.on('end', () => {
        console.log(losdatos.length);
        console.log(losdatos);
    })
}).on('error', e => {
    console.log("Error: ", e);
})