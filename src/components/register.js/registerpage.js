import react from "react";
import "./registerpage.css";

function RegisterPage(){
    return(
        <div>
            <div className="registration">
                Register
            </div>
            <div className="introReg">
                Register to list your bootcamp or rate, review and  favorite bootcamps
            </div>
            <label className="nameLabel">Name</label>
                <input placeholder="Enter Full Name" className ="nameInput"/>
            <label className="regEmailLabel">Email Address</label>
                <input placeholder="Enter Email" className ="regEmailInput"/>
            <label className="regPassword">Password</label>
                <input placeholder="Enter Password" className ="regPasswordInput"/>
            <label className="regPasswordConfirm">Confirm Password</label>
                <input placeholder="Confirm Password" className ="regPasswordConfirmInput"/>
            <div className="radioBtns">
                <p className="role">User Role</p>
                <input type="radio" className="regularUser" value="Regular User"/>
                <label>Regular User (Browse, Write reviews, etc)</label>
                <br/>
                <input type="radio" className="publisher" value="Publisher"/>
                <label>Bootcamp Publisher</label>
            </div>
            
            <div className="userRoleBox">
            </div>
            <div >
                <a href="" className = "warning">
                    * You must be  affiliated with the  bootcamp in some way  in order to add it to DevCamper
                </a>
            </div>
            <button className="regButton">Register</button>
            <div className="main">
            </div>
        </div>
    )
}

export default  RegisterPage