import React, { useState, useEffect } from 'react';

import axios from '../axios';
import '../style/Banner.css';
import requests from '../Requests';


export const Banner = () => {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        const fetchData=  async() => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);
    console.log(movie);

    const truncate= (string, n) =>{
        /*resume y acorta texto string es el tipo y n el numero de caracteres en este caso de letras lo uso a la hora de tener biblias de texto */
        return string?.length > n
        ? string.substr(0, n - 1) + '...'
        : string;
    }
    return (
        <header
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center" ,
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview,200)}</h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}
