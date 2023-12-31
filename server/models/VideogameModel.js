const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideogameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    platform: {
      type: String,
      required: true,
    },
    PEGI: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image:{
      type: String ,
      required : false
    },
    discount: {
      type: Number,
      required: false,
    },
    genere: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Videogame", VideogameSchema);
