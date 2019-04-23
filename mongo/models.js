const mongoose = require("mongoose");
const { Vehicles } = require("./schemas");

const VehiclesModel = mongoose.model("Vehicle", Vehicles);

module.exports = {
  VehiclesModel
};
