const express = require("express");
const router = express.Router();
const Comentario = require("../../models/coment");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const existComment = await Comentario.findOne({ coment: req.body.coment });
  if (existComment) {
    return res.status(400).json({ emailerror: "Comentário já cadastrado" });
  }
  const existUsername = await Comentario.findOne({
    username: req.body.username,
  });
  if (existUsername) {
    return res.status(400).json({ emailerror: "usuário já cadastrado" });
  }

  Comentario.findOne({ email: req.body.email })
    .then((doc) => {
      if (doc) {
        return res.status(400).json({ emailerror: "E-mail já cadastrado" });
      }
      const new_coment = Comentario({
        username: req.body.username,
        email: req.body.email,
        coment: req.body.coment,
        password: req.body.password,
      });

      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(new_coment.password, salt, function (err, hash) {
          // Store hash in your password DB.
          if (err) throw err;
          new_coment.password = hash;
          new_coment
            .save()
            .then((doc_save) => res.status(201).json(doc_save))
            .catch((err) => res.status(400).json({ emailerror: "deu erro" }));
        });
      });
    })
    .catch((err) => res.status(400).json({ emailerror: "deu erro" }));
});

module.exports = router;
