import React, {useState} from "react";
import "./loginpage.css"

function Loginpage(){
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    let newUser = {
        "email": userEmail, 
        "password": password
    }

    const emailChangeHandler = (e) => {
        setUserEmail(e.target.value)
        //console.log(userEmail)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const clickHandler = (e) => {
        console.log(newUser)
    }

    return(
        <div>
            <div className="title">
                Login
            </div>
            <div className="introPage">
                Log in to list your bootcamp or rate, review and favorite bootcamps
            </div>
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
                    Forgot password
                </a>
                <a 
                className="resetPassword" 
                href="">
                    Reset password
                </a>
            </div>
            <div className="mainDiv">
            </div>
        </div>
    )
}

export default  Loginpage