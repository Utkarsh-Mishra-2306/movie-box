import React from "react";
import "./LandingPageContent.css";
import { Link } from "react-router-dom";

function LandingPageContent(){
    return(
        <div className = "landingpagecontent_container">
            <p className = "landingpagecontent_title">
                Unlimited movies, TV shows and more.
            </p>
            <p className = "landingpagecontent_subtitle">
                Watch anywhere. Cancel anytime.
            </p>
            <p className = "landingpagecontent_description">
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className = "landingpagecontent_input">
                <input type = "text" placeholder = "Email address" />

                <Link className = "landingpagecontent_button" to={"/sign-in"}>
                    <button>GET STARTED</button>
                </Link>

            </div>
        </div>
    );
}

export default LandingPageContent;