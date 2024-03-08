const http = require("node:http");


const contenido_url = [{
    URL  : process.argv[2],
    URL2 : process.argv[3],
    URL3 : process.argv[4]
}];


contenido_url.forEach(x => {
    Object.values(x).forEach(i => {
        http.get(i, respuesta => {
            respuesta.setEncoding('utf-8');
            let datos_enviados = '';
            respuesta.on('data', datos => {
                datos_enviados += datos;
            })

            respuesta.on('end', () => {
                console.log(datos_enviados);
                datos_enviados = '';
            })

            respuesta.on('error', err => {
                console.log(err);
            })
        }).on('error', e => {
            console.log(e);
        })
    })
})


