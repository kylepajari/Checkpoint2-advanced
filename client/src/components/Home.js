import React, { Component, Fragment } from "react";
import styled from "styled-components";
import VehicleList from "../containers/VehicleList";
import VehicleActions from "../containers/VehicleActions";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Home extends Component {
  componentDidMount() {
    fetch("/api/vehicles")
      .then(res => res.json())
      .then(vehicles => this.props.listVehicles(vehicles))
      .catch(() => this.props.listVehicles([]));
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Vehicles</h1>
        </Center>
        <Center>
          <FlexWrapper>
            <VehicleList />
            <VehicleActions />
          </FlexWrapper>
        </Center>
      </Fragment>
    );
  }
}

export default Home;
