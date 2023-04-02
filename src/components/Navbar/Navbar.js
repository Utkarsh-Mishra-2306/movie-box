import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

function Navbar({showSignInButton, logout}){

    const navigate = useNavigate();

    const goToSignInPage = () =>{
        navigate("/sign-in");
    }

    return(
        <div className = "navbar_container">
            <img className = "navbar_logo" 
                src = "data:image/jpeg;base64,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" 
                alt = "LOGO"
            />
            {/* <Link to = "/sign-in">
                <button className = "navbar_button">Sign In</button>
            </Link>  */}

            {/* "To traverse through all the route we have to link them, we can link them by the help of Link function (method) or we can use the functionality onClick but that is a long procedure we have to use the useNavigate() fn to link the path, whereas if we use Link fn we just have to specify the path only, it is short and less code." */}

            {showSignInButton === false ? 
            (" ") : 
            (<button className = "navbar_button" onClick = {goToSignInPage}> Sign In</button>)
            }

            {
                logout && <p className = "navbar_icon"><AccountCircle style={{fontSize: "35px"}}/></p> 
            }

            

        </div>
    );
}

export default Navbar;