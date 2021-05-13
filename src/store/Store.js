import {createStore } from "redux";
import { LoginReducer } from "./Reducer";


export const store = createStore(
    LoginReducer,
    RegisterReducer
    );

