import { VehicleActionTypes } from "./vehicle.types";

const INITIAL_STATE = {
  list: [],
  selectedID: '',
};

const vehicleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VehicleActionTypes.SET_CAT_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case VehicleActionTypes.SET_CAT_ID:
      return {
        ...state,
        selectedID: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
