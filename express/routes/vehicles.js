const express = require("express");
const router = express.Router();
const VehiclesController = require("../controllers/vehicles");

router.get("/", (request, response) => {
  VehiclesController.getAll().then(results => response.json(results));
});

router.post("/", (request, response) => {
  VehiclesController.createVehicle(request.body).then(results =>
    response.json(results)
  );
});

router.delete("/:model", (request, response) => {
  VehiclesController.deleteVehicle(request.params.model).then(results =>
    response.json(results)
  );
});

router.get("/:id", (request, response) => {
  VehiclesController.getById(request.params.id).then(result =>
    response.json(result)
  );
});

module.exports = router;
