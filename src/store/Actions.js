import {registerStart,registerSuccess,registerFailure} from '../store/actionTypes'
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
