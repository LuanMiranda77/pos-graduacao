const http  = require("http");

const hotname='127.0.0.1'

const port = 5000;

http.createServer((req, res)=>{
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Hello word");
}).listen(port, hotname, ()=>{console.log(`O Servidor esta rodando http://${hotname}:${port}/`)});