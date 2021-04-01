export const getVehicleState = (store) => store.vehicle
export const getVehcicleData = store => getVehicleState(store) ? getVehicleState(store).vehicleData : []