const http = require("node:http");
const map = require("through2-map");


const port = process.argv[2];


const server = http.createServer((req,res) => {
    if(req.method !== "POST"){
        return res.end("Solo se permiten solicitudes POST");
    }

    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(res);
});

server.listen(port);