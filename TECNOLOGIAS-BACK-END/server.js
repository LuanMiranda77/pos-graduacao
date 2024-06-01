const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "text/png",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
  woff: "font/woof",
};

const hotname = "127.0.0.1";

const port = 5000;

http
  .createServer((req, res) => {
    const uri = url.parse(req.url).pathname;
    const fullpath = path.join(process.cwd(), decodeURI(uri));
    let loadFile;
    try {
      loadFile = fs.lstatSync(fullpath);
    } catch (error) {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.write("404: Arquivo não encontrado!");
      res.end("");
    }
    if (loadFile.isFile()) {
      let type = mimeTypes[path.extname(fullpath).substring(1)];
      res.writeHead(200, { "Content-type": type });
      let stream = fs.createReadStream(fullpath);
      stream.pipe(res);
      //    res.write("ok!");
      //    res.end("");
    } else if (loadFile.isDirectory()) {
      res.writeHead(302, { Location: "index.html" });
      res.end();
    } else {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.write("500: Error internal service");
      res.end();
    }
  })
  .listen(port, hotname, () => {
    console.log(`O Servidor esta rodando http://${hotname}:${port}/`);
  });
