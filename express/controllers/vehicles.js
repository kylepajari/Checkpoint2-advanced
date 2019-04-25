const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { VehiclesModel } = require("../../mongo/models");

const getAll = () => {
  return VehiclesModel.find({});
};

const createVehicle = car => {
  return VehiclesModel.create({
    make: car.make,
    model: car.model,
    price: car.price,
    color: car.color
  });
};

const deleteVehicle = id => {
  return VehiclesModel.deleteOne({ _id: id });
};

const getById = id => {
  return VehiclesModel.findOne({ _id: ObjectId(id) });
};

module.exports = { getAll, createVehicle, deleteVehicle, getById };
