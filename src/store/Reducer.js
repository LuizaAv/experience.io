
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    PAGE_LOAD,
    LOADING_SUCCESS,
    LOADING_FAILURE
} from "./actionTypes";

const initialState = {
    data: []
}


export function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_START:
            return { success: true };
        case REGISTER_SUCCESS:
            return {};
        case REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}


export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { lodding: true };
        case LOGIN_SUCCESS:
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

export function BootcampsReducer(state = initialState, action) {
    switch (action.type) {
        case PAGE_LOAD:
            return {
                loading: true
            }
        case LOADING_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case LOADING_FAILURE:
            return {
                loading: false
            }
        default:
            return state
    }
}