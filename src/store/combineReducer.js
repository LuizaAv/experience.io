import { combineReducers } from "redux";
import {LoginReducer, registerReducer, BootcampsReducer} from "./Reducer"

export const rootReducer = combineReducers({
    bootcamps:BootcampsReducer,
    LoginReducer,
    registerReducer
})  