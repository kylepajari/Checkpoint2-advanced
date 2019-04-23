export function listVehicles(vehicles) {
  return {
    type: "LIST_VEHICLES",
    value: vehicles
  };
}

export function createVehicle(vehicle) {
  return {
    type: "CREATE_VEHICLE",
    value: vehicle
  };
}

export function deleteVehicle(model) {
  return {
    type: "DELETE_VEHICLE",
    value: model
  };
}
