import React, { useState, useEffect } from "react";

const Swapi = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const URL = "https://swapi.online/api/films";
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();

                const movieList = data.result.map((element) => ({
                    title: element.result.title,
                    releaseDate: element.result.release_date
                }));

                setMovies(movieList);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {movies.map((movie, index) => (
                <div key={index}>
                    <p>Movie - {movie.title}</p>
                    <p>Date - {movie.releaseDate}</p>
                </div>
            ))}
        </div>
    );
};

export default Swapi;