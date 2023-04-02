import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import LandingPageContent from "../../components/LandingPageContent/LandingPageContent.js";

function LandingPage(){
    return(
        <div className = "landingpage_container">
            <Navbar />
            <LandingPageContent />
        </div>
    );
}

export default LandingPage;