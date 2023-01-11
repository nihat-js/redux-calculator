import { combineReducers } from "redux";
import { calculateReducer } from "./reducers/calculateReducer";


export const  RootReducer  = combineReducers({
    calculateReducer : calculateReducer
})