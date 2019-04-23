import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 50px;
`;

const VehiclesList = props => (
  <Wrapper>
    <h2>List</h2>
    {props.vehicles.map((vehicle, index) => (
      <p key={index}>
        {vehicle.make} {vehicle.model} &nbsp;
        <Link to={`/vehicles/${vehicle._id}`}>details</Link>
      </p>
    ))}
  </Wrapper>
);

VehiclesList.propTypes = {
  vehicles: PropTypes.array
};

export default VehiclesList;
