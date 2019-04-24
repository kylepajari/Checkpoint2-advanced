import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

class VehicleDetails extends Component {
  state = {
    vehicle: {}
  };

  componentDidMount() {
    const vehicleId = this.props.match.params.id;
    fetch(`/api/vehicles/${vehicleId}`)
      .then(res => res.json())
      .then(vehicle => this.setState({ vehicle }));
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Vehicle</h1>
        </Center>
        <Center>
          {this.state.vehicle.make && (
            <div>
              <h4>Make: {this.state.vehicle.make}</h4>
              <h4>Model: {this.state.vehicle.model}</h4>
              <h4>Color: {this.state.vehicle.color}</h4>
              <h4>Price: {this.state.vehicle.price}</h4>
            </div>
          )}
        </Center>
      </Fragment>
    );
  }
}

VehicleDetails.propTypes = {
  match: PropTypes.object
};

export default VehicleDetails;
