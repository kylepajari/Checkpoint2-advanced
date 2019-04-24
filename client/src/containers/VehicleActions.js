import { connect } from "react-redux";
import VehicleActions from "../components/VehicleActions";
import { createVehicle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    createVehicle: vehicle => dispatch(createVehicle(vehicle))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VehicleActions);
