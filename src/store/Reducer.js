
import {
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./actionTypes";

const initialState = {

}

export function RegisterReducer(state =initialState, action){
    switch(action.type){
        case REGISTER_START:
            return {success: true};
        case REGISTER_SUCCESS:
            return {};
        case REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}


export function LoginReducer(state=initialState , action){
    switch(action.type){
        case LOGIN_REQUEST:
            return {lodding: true};
        case  LOGIN_SUCCESS:
            return {
                success: true,
                lodding: false,
                ...state
            };
        case LOGIN_FAILURE:
            return {};

        default:
            return state
    }
}


