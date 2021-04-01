import {combineReducers} from "redux";
import vehicleDataReducer from "./vehicleData";


const rootReducer = combineReducers({vehicleData : vehicleDataReducer})

export default rootReducer;