import { SET_VEHICLE_DATA } from "./actionTypes"

export const setVehicleData = (vehicleData) => {
    return(
            {
                type: SET_VEHICLE_DATA,
                payload: vehicleData
            }
    )
}