
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";


export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export function registerStart(payload){
    return {type: REGISTER_START, payload}
}

export function registerSuccess(payload){
    return {type: REGISTER_SUCCESS, payload}
}

export function registerFailure(payload){
    return {type: REGISTER_FAILURE, payload}
}

export function loginRequest(payload){
    return {type: LOGIN_REQUEST, payload}
}

export function loginSuccess(payload){
    return {type: LOGIN_SUCCESS, payload}
}

export function loginFailure(payload){
    return {type: LOGIN_FAILURE, payload}
}

