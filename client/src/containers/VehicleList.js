import { connect } from "react-redux";
import VehicleList from "../components/VehiclesList";

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  };
};

export default connect(mapStateToProps)(VehicleList);
