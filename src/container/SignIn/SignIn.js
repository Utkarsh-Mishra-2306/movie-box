import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar.js";
import SignInBody from "../../components/SignInBody/SignInBody.js";

function SignIn(){
    return(
        <div>
            <Navbar showSignInButton = {false} />
            <SignInBody />
        </div>
    );
}

export default SignIn;