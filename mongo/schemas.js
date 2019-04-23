const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vehicles = new Schema({
  make: String,
  model: String,
  price: String,
  color: String
});

module.exports = { Vehicles };
