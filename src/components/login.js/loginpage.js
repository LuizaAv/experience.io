import react from "react";
import "./loginpage.css"

function Loginpage(){
    return(
        <div>
            <div className="title">
                Login
            </div>
            <div className="introPage">
                Log in to list your bootcamp or rate, review and favorite bootcamps
            </div>
            <label className="emailLabel">Email Address</label>
                <input placeholder="Enter Email" className ="emailInput"/>
            <label className="passwordLabel">Password</label>
                <input placeholder="Enter Password" className="passwordInput"/>
            <button>
                Login
            </button>
            <div>
                <a className="forgotPassword" href="">Forgot password</a>
                <a className="resetPassword" href="">Reset password</a>
            </div>
            <div className="mainDiv">
            </div>
        </div>
    )
}

export default  Loginpage