import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

const FlexForm = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

class VehicleActions extends Component {
  state = {
    createVehicleMake: "",
    createVehicleModel: "",
    createVehiclePrice: "",
    createVehicleColor: ""
  };

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  createVehicle = e => {
    e.preventDefault();
    fetch("/api/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make: this.state.createVehicleMake,
        model: this.state.createVehicleModel,
        price: this.state.createVehiclePrice,
        color: this.state.createVehicleColor
      })
    })
      .then(res => res.json())
      .then(result => this.props.createVehicle(result))
      .then(() => {
        this.setState({
          createVehicleMake: "",
          createVehicleModel: "",
          createVehiclePrice: "",
          createVehicleColor: ""
        });
      });
  };

  render() {
    return (
      <div>
        <FlexForm onSubmit={this.createVehicle}>
          <TextField
            onChange={this.handleTextChange}
            id="createVehicleMake"
            label="Make"
            value={this.state.createVehicleMake}
            variant="outlined"
          />
          <TextField
            onChange={this.handleTextChange}
            id="createVehicleModel"
            label="Model"
            value={this.state.createVehicleModel}
            variant="outlined"
          />
          <TextField
            onChange={this.handleTextChange}
            id="createVehicleColor"
            label="Color"
            value={this.state.createVehicleColor}
            variant="outlined"
          />
          <TextField
            onChange={this.handleTextChange}
            id="createVehiclePrice"
            label="Price"
            value={this.state.createVehiclePrice}
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Create Vehicle
          </Button>
        </FlexForm>
      </div>
    );
  }
}

VehicleActions.propTypes = {
  createVehicle: PropTypes.func
};

export default VehicleActions;
