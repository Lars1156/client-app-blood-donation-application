import React from "react";
import './css.files/login.css';
import AdminLogin from "./LoginPage";
function LoginButton(){
    return(
        <div className="login-button-container">
        <button className="login-button"><AdminLogin/></button>
    </div>
    )
}
export default LoginButton;