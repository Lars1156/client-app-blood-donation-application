import React from "react";
import {Link} from 'react-router-dom';
import LoginButton from "./LoginButton";

function Hnavigation(){
    return(
        <div>
            <Link to ="/Loginpage"><LoginButton/></Link>
        </div>
    )
}
export default Hnavigation;