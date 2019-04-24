import { connect } from "react-redux";
import VehicleList from "../components/VehiclesList";
import { deleteVehicle } from "../actions/index";

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteVehicle: model => dispatch(deleteVehicle(model))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleList);
