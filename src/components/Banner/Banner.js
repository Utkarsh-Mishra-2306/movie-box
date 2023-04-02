import React from "react";
import "./Banner.css";

function Banner(){
    return(
        <div className = "banner"
        style={{
            backgroundImage: 'url("https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200")',
            backgroundPosition: "center center",
            banckgroundSize: "cover",
        }}
        >
            <div className = "banner_contents">
                <h1>Movie name</h1>
                <div className = "banner_buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim imperdiet dolor ac fermentum. 
                    Etiam sit amet purus ultricies nibh sagittis laoreet. Nunc sed sapien ullamcorper, eleifend lorem ac, laoreet ligula. 
                    In id ex a diam volutpat dapibus scelerisque id justo. Aliquam mollis dapibus augue, vitae auctor ante accumsan at.
                </h3>
            </div>
            
        </div>
    );
}

export default Banner;