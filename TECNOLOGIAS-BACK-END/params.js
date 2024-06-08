const express = require("express");
const router = express.Router();

// router.get("/:p", ({ req, res }) => {
//   res.send("Vocesdsdsd");
// });
router.get("/product-[0-9]", ({ req, res }) => {
  res.status(200).json({ description: "Produto", id: 123 });
});
router.get("/list-product/:p", ({ req, res }) => {
  const f = req?.params?.p;
  res.status(200).json({ description: "Produto " + f, id: 123 });
});
module.exports = router;
