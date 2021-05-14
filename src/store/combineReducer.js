import { combineReducers } from "redux";
import {LoginReducer, RegisterReducer} from "./Reducer"

export const rootReducer = combineReducers(
    {LoginReducer, 
    RegisterReducer}
)