import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "../../requests/Requests";

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const request = await axios.get(
            "https://api.themoviedb.org/3/trending/all/week?api_key=9a0994055c8a98b86fbb525e282c5e6b"
        );
        console.log(request.data);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * (request.data.results.length - 1))
            ]
        );
        console.log(movie?.backdrop_path);
    }

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    };

    return(
        
        <div className = "banner"
        style={{
            backgroundImage:  movie?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
            : 'url("https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200")',
            backgroundPosition: "center center",
            banckgroundSize: "cover",
        }}
        >
            <div className = "banner_contents">
                <h1>{movie?.original_name || movie?.original_title || movie?.title}</h1>
                <div className = "banner_buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h3>
                    {truncate(movie?.overview, 100)}
                </h3>

            </div>
    
        </div>

       

    );
}

export default Banner;