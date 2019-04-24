import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 50px;
`;

const deleteVehicle = (model, props) => {
  console.log("deleting", model);

  fetch(`/api/vehicles/${model}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(result => props.deleteVehicle(model));
};

const VehiclesList = props => (
  <Wrapper>
    <h2>List</h2>
    {props.vehicles.map((vehicle, index) => (
      <p key={index}>
        {vehicle.make} {vehicle.model} &nbsp;
        <Link to={`/vehicles/${vehicle._id}`}>details</Link>
        &nbsp;
        <Button
          onClick={() => deleteVehicle(vehicle.model, props)}
          type="submit"
          variant="contained"
        >
          Delete
        </Button>
      </p>
    ))}
  </Wrapper>
);

VehiclesList.propTypes = {
  vehicles: PropTypes.array
};

export default VehiclesList;
