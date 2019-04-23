import { connect } from "react-redux";
import VehicleActions from "../components/VehicleActions";
import { createVehicle, deleteVehicle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    createVehicle: vehicle => dispatch(createVehicle(vehicle)),
    deleteVehicle: model => dispatch(deleteVehicle(model))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VehicleActions);
