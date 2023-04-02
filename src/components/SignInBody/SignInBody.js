import React from "react";
import "./SignInBody.css";
import { useState } from "react";

function SignInBody(){

    const [showSignInContainer, setShowSignInContainer] = useState(true);

    return(
        <>
        {showSignInContainer ? (<div className = "signinbody_container">
            <div className = "signinbody_form">
                <p className = "signinbody_title">Sign In</p>
                <input type = "email" placeholder = "Email" />
                <input type = "password" placeholder = "Password" />
                <button>Sign In</button>
                <button>Log In as Guest User</button>
                <p className = "signinbody_text">New to Movie App ?
                <span onClick={() => setShowSignInContainer(false)}> Sign Up</span>
                </p>
            </div> </div>
            ) : (
            <div className = "signinbody_container">
                <div className = "signinbody_form">
                    <p className = "signinbody_title">Sign Up</p>
                    <input type = "text" placeholder = "Name" />
                    <input type = "email" placeholder = "Email" />
                    <input type = "password" placeholder = "Password" />
                    <button>Sign Up</button>
                    <button>Log In as Guest User</button>
                    <p className = "signinbody_text">Have an account?
                    <span onClick = {() => setShowSignInContainer(true)}> Sign In</span>
                    </p>
                </div>
            </div>)}
        

        
        </>
        
    );
}

export default SignInBody;