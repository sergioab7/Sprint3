const http = require("node:http");
const url = require("url");


const port = process.argv[2];

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true);
    const iso = parsedUrl.query.iso;


    if(req.method=="GET" && parsedUrl.pathname === "/api/parsetime"){
        const date = new Date(iso);
        const response = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }

        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        res.end(JSON.stringify(response));
    }
    else if(req.method=="GET" && parsedUrl.pathname === "/api/unixtime"){
        const unixtime = new Date(iso).getTime();
        const response = {
            unixtime:unixtime
        };
        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        res.end(JSON.stringify(response));
    }else{
        res.writeHead(404);
        res.end();
    }
})


server.listen(port);