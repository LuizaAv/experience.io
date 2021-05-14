import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions";
import "./registerpage.css";

function RegisterPage(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [user, setUser] = useState("");

    const dispatch = useDispatch()

    const fullNameChangeHandler = (e) => {
        setFullName(e.target.value)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const passwordConfirmChangeHandler = (e) => {
        setPasswordConfirm(e.target.value)
    } 

    const submitUser = (e) => {
        e.preventDefault();
        setUser({
                "name": fullName,
                "email": email,
                "password": password,
                "role": "publisher"
                }
            )
        //console.log(user)
    }

    useEffect (()=>{
        dispatch(register(user))
    },[dispatch])
    

    return(
        <div className="mainDiv">
            <h2 className="registration">
                Register
            </h2>
            <p className="introReg">
                Register to list your bootcamp or rate, review and  favorite bootcamps
            </p>
            <label className="nameLabel">
                Name
            </label>
                <input 
                placeholder="Enter Full Name" 
                className ="nameInput"
                onChange = {fullNameChangeHandler}
                value = {fullName}
                />
            <label className="regEmailLabel">
                Email Address
            </label>
                <input 
                placeholder="Enter Email" 
                className ="regEmailInput"
                onChange = {emailChangeHandler}
                value = {email}
                />
            <label className="regPassword">
                Password
            </label>
                <input 
                placeholder="Enter Password" 
                className ="regPasswordInput"
                onChange = {passwordChangeHandler}
                value = {password}
                />
            <label className="regPasswordConfirm">
                Confirm Password
            </label>
                <input 
                placeholder="Confirm Password" 
                className ="regPasswordConfirmInput"
                onChange = {passwordConfirmChangeHandler}
                value = {passwordConfirm}
                />
            <div className="radioBtns">
                <p className="role">User Role</p>
                <input 
                type="radio" 
                name="mmm"
                className="regularUser" 
                value="Regular User"/>
                <label>Regular User (Browse, Write reviews, etc)</label>
                    <br/>
                <input 
                type="radio" 
                name="mmm"
                className="publisher" 
                value="Publisher"/>
                
                <label>Bootcamp Publisher</label>
            </div>
            
            <div className="userRoleBox">
            </div>
            <div >
                <a href="" className = "warning">
                    <p>You must be  affiliated with the  bootcamp 
                    in some way  in order to add it to DevCamper</p>
                </a>
            </div>
                <button 
                className="regButton"
                type="submit"
                onClick={submitUser}
                >
                    Register
                </button>
            <div className="main">
            </div>
        </div>
    )
}

export default  RegisterPage