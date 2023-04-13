import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";

function Row({title, fetchUrl, isLargeRow = false}) {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    async function fetchData()
    {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
        console.log(request.data.results);
    }

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    return(
        <div className = "row">
            <h1>{title}</h1>
            <div className = "row_posters">
                {movie?.map((movie) => 
                    movie?.poster_path && movie?.backdrop_path ? (
                        <img 
                            className = {`row_poster ${isLargeRow && "rowPoster_large"}`}
                            key = {movie.id}
                            src = {`${baseUrl}${
                                isLargeRow ? movie?.poster_path : movie?.backdrop_path
                            }`}
                            alt = {movie?.name}
                        />
                    ) : ("")
                )}
            </div>
        </div>
    );
}

export default Row;