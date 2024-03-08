const net = require("node:net");

const puerto = process.argv[2];

const rellenarZeros = (numero) => {
    let actualizado = '';
    if(numero<10){
      actualizado='0'+numero;
    }
    return actualizado;
}

function currentTime(){
    const fecha = new Date();
    const year = fecha.getFullYear();
    const mes = rellenarZeros(fecha.getMonth()+1);
    const day = rellenarZeros(fecha.getDay()+3);
    
    const hora = rellenarZeros(fecha.getHours());
    const minutes = fecha.getMinutes();
    
    return `${year}-${mes}-${day} ${hora}:${minutes}`;
}

const server = net.createServer((c) => {
    const datos = currentTime() + "\n";
    c.end(datos);
});

server.on('error', err => {
    throw new err;
})

server.listen(puerto, () => {
    console.log("Server conectado!");
})