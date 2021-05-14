import React, {useEffect, useState} from "react";
import "./loginpage.css";


function Loginpage(){
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [resp, setResponse] = useState([])


    const emailChangeHandler = (e) => {
        setUserEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }



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
            <button >
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