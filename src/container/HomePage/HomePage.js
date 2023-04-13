import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Banner from "../../components/Banner/Banner.js";
import Row from "../../components/Row/Row.js";

function HomePage(){
    return(
        <div>
        <Navbar showSignInButton={false} logout={true} />
        <Banner />
        <Row
            title = "MOVIE BOX HITS"
            fetchUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=9a0994055c8a98b86fbb525e282c5e6b"
            isLargeRow
        />
        </div>
        
    );
}

export default HomePage;