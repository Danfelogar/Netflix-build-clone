import React, { useEffect, useState } from 'react';

import axios from '../axios';
import '../style/Row.css'

export const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);

    const base_url = "http://image.tmdb.org/t/p/original/";

    useEffect(() => {

        const fetchData = async() =>{
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                                {/* con esto prevengo renderizar links muertos util para no presentar informacion vacia en la web con condicionales por cumplir ejem ([(isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path &&]) */}
                {movies.map(
                    (movie) =>
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img
                        className={` row__poster ${isLargeRow && "row__posterLarge" } `}
                        key={ movie.id }
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    )
                )}
            </div>
        </div>
    )
}
