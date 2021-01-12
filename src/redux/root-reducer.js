import {combineReducers} from 'redux';
import  vehicleReducer from './vehicle/vehicle.reducer.jsx'
export default combineReducers({vehicle: vehicleReducer});
