const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router_params = require("./params.js");

const hotname = "127.0.0.1";

const port = 5000;

app.use(bodyparser.urlencoded({ extended: false }));

const middleware = function (req, res, next) {
  req.body.id = Math.random(0, 1999) + 1;
  next();
};
app.use(middleware);
app.use("/contato", express.static(__dirname + "/public/contato"));
app.post("/contato", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/page/client/index.html", (req, res) => {
  res.sendFile(__dirname + "/page/client/index.html");
});
app.get("/page/product/index.html", (req, res) => {
  res.sendFile(__dirname + "/page/product/index.html");
});
app.get("/page/stock/index.html", (req, res) => {
  res.sendFile(__dirname + "/page/stock/index.html");
});

app.post("/form-cad", (req, res) => {
  res.status(200).json({ usuario: "luan", id: 123 });
});

app.use("/", router_params);

app.get("*", (req, res) => {
  res.send("Pagina não existe");
});

app.listen(port, hotname, () => {
  console.log(`O Servidor esta rodando http://${hotname}:${port}/`);
});
