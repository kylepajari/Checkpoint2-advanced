/* eslint-disable no-case-declarations */
import { combineReducers } from "redux";

const vehicles = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case "LIST_VEHICLES":
      return action.value;
    case "CREATE_VEHICLE":
      newState.push(action.value);
      return newState;
    case "DELETE_VEHICLE":
      const index = newState.findIndex(v => v.model === action.value);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  vehicles
});
