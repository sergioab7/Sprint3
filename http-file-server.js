const http = require("node:http");
const fs = require("node:fs");


const port = process.argv[2];
const archivo = process.argv[3];


const server = http.createServer((req,res) => {
    res.writeHead(200, {
        "Content-Type":"text/html; charset=utf-8"
    })
    const stream = fs.createReadStream(archivo);
    stream.pipe(res);
});

server.listen(port);