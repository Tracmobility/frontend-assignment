import { VehicleActionTypes } from "./vehicle.types";

export const setCatAction = (list) => ({
  type: VehicleActionTypes.SET_CAT_LIST,
  payload: list,
});

export const selectIDAction = (id) => ({
  type: VehicleActionTypes.SET_CAT_ID,
  payload: id,
});