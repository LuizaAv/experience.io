
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";


export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export function registerRequest(payload){
    return {type: REGISTER_REQUEST, payload}
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

