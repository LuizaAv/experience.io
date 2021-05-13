import {
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./Actions";

const initialState = {
    "email": "",
    "password": ""
}
export function RegisterReducer(state = {}, action){
    switch(action.type){
        case REGISTER_REQUEST:
            return {success: true};
        case REGISTER_SUCCESS:
            return {};
        case REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}


export function LoginReducer(state = initialState, action){
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                success: true,  
            };
        case  LOGIN_SUCCESS:
            return {
                success: true,
            };
        case LOGIN_FAILURE:
            return {}
    }
}