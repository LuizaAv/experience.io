import axios from "axios";

const loginURL = "http://devcamp-api-node.herokuapp.com/api/v1/auth/login";
const registerURL = "http://devcamp-api-node.herokuapp.com/api/v1/auth/register";

const loggingIn = {
    "email": "",
    "password": ""
}

const registering = {
    "name": "",
    "email": "",
    "password": "",
    "role": ""
}


export const loginAPI = (loggingIn) => {
    axios(loginURL, {
        method: "POST"
    })
}

export const registerAPI = (registering) => {
    axios(registerURL, {
        method: "POST"
    })
}