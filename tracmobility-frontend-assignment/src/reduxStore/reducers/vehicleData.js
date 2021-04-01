import { SET_VEHICLE_DATA } from "../actionTypes"

const initialState = {
    vehicleData: []
}

const vehicleDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VEHICLE_DATA: {
            return{
                ...state, 
                vehicleData: [...action.payload]
            }
        }
        default: 
        return state;
    }
}

export default vehicleDataReducer;