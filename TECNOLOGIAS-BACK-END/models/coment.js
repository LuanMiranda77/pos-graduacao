const { Schema } = require("mongoose");
const mongo = require("mongoose");

const ComentarioShema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  coment: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  dt_create: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Comentario = mongo.model("coment", ComentarioShema);
