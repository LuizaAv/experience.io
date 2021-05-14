import {registerStart,registerSuccess,registerFailure, loginRequest, loginSuccess, loginFailure} from '../store/actionTypes'
import axios from 'axios'

const loginURL = "http://devcamp-api-node.herokuapp.com/api/v1/auth/login";
const registerURL = "http://devcamp-api-node.herokuapp.com/api/v1/auth/register";


export const register = (values) => {
    return async dispatch => {
        try {
              dispatch(registerStart())
        const response = await axios.post(registerURL);
        dispatch(registerSuccess(response));
      }
      catch(error) {
        dispatch(registerFailure(error));
        console.log(error)
      }
    }

}

export const regSuccess = (values) => {
    return async dispatch => {
        try {
              dispatch(registerSuccess())
        const response = await axios.post(registerURL);
        dispatch(registerSuccess(response));
      }
      catch(error) {
        dispatch(registerFailure(error));
        console.log(error)
      }
    }
}

export const regFailure = (values) => {
    return async dispatch => {
        try {
              dispatch(registerFailure())
        const response = await axios.post(registerURL);
        dispatch(registerSuccess(response));
      }
      catch(error) {
        dispatch(registerFailure(error));
        console.log(error)
      }
    }
}

export const logRequest = (values) => {
    return async dispatch => {
        try {
              dispatch(loginRequest())
        const response = await axios.post(loginURL);
        dispatch(loginSuccess(response));
      }
      catch(error) {
        dispatch(loginFailure(error));
        console.log(error)
      }
    }
}


export const logSuccess = (values) => {
    return async dispatch => {
        try {
              dispatch(loginSuccess())
        const response = await axios.post(loginURL);
        dispatch(loginSuccess(response));
      }
      catch(error) {
        dispatch(loginFailure(error));
        console.log(error)
      }
    }
}

export const logFailure = (values) => {
    return async dispatch => {
        try {
              dispatch(loginFailure())
        const response = await axios.post(loginURL);
        dispatch(loginSuccess(response));
      }
      catch(error) {
        dispatch(loginFailure(error));
        console.log(error)
      }
    }
}