import React, {useEffect, useState} from "react";
import axios  from "axios";
import "./loginpage.css"

function Loginpage(){
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [resp, setResponse] = useState([])

    let newUser = {
        "email": userEmail, 
        "password": password
    }

    const emailChangeHandler = (e) => {
        setUserEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const clickHandler = (e) => {
        
    }
    
    /*
    useEffect(() => {
        async function fetchingData(){
            const result = await axios.get("http://devcamp-api-node.herokuapp.com/api/v1/auth/me")
            console.log(result)
        }
        fetchingData()
    }, [])*/

    return(
        <div className="mainDiv">
            <h2 className="title">
                Login
            </h2>
            <p className="introPage">
                Log in to list your bootcamp or rate, review and favorite bootcamps
            </p>
            <label className="emailLabel">
                Email Address
            </label>
                <input 
                placeholder="Enter Email" 
                className ="emailInput"
                onChange = {emailChangeHandler}
                />
            <label className="passwordLabel">
                Password
            </label>
                <input 
                placeholder="Enter Password" 
                className="passwordInput"
                onChange = {passwordChangeHandler}
                />
            <button onClick={clickHandler}>
                Login
            </button>
            <div>
                <a 
                className="forgotPassword" 
                href="">
                    Forgot password?
                </a>
                <a 
                className="resetPassword" 
                href="">
                    Reset password
                </a>
             </div>
        </div>
    )
}

export default  Loginpage