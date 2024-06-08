const express = require("express");
const app = express();
const router_params = require("./params.js");

const hotname = "127.0.0.1";

const port = 5000;

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
