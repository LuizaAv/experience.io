import {
    registerStart,
    registerSuccess,
    registerFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    bootcampsLoad,
    bootcampLoadingSuccess,
    bootcampsLoadingFailure
}
    from '../store/actionTypes'
import axios from 'axios'

const loginURL = "http://devcamp-api-node.herokuapp.com/api/v1/auth/login";
const registerURL = "http://devcamp-api-node.herokuapp.com/api/v1/auth/register";
const bootcampsURL = "http://devcamp-api-node.herokuapp.com/api/v1/bootcamps"

export const register = (values) => {
    return async dispatch => {
        try {
            dispatch(registerStart())
            const response = await axios.post(registerURL, {
                values
            });
            console.log(response, "66666")
            dispatch(registerSuccess(response));
        }
        catch (error) {
            dispatch(registerFailure(error));
            console.log(error)
        }
    }

}

export const login = (values) => {
    return async dispatch => {
        try {
            dispatch(loginRequest())
            const response = await axios.get(bootcampsURL, {
                values
            });
        }
        catch (error) {
            dispatch(loginFailure(error));
            console.log(error)
        }
    }
}

export const bootcamps = () => {
    return async dispatch => {
        try {
            dispatch(bootcampsLoad())
            const response = await axios.get(bootcampsURL);
            dispatch(bootcampLoadingSuccess(response));
        }
        catch (error) {
            dispatch(bootcampsLoadingFailure(error));
            console.log(error)
        }
    }
}