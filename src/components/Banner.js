import React, { useState, useEffect } from 'react';

import axios from 'axios';
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
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "center center" ,
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                <h1 className="banner__description">{truncate(`This is a test description This is a tesdescriptionThis is a test description This is a test descriptionThis is a test description This is a test This is a test description This is aq213123 tesdescriptionThis is a test description This is a test descriptionThis is a test description This is a test This is a test description This is a tesdescriptionThi213213123s is a test description This is a test descriptionThis is a test description This is a test This is a test description This i23132s a tesdescriptionThis is a test description This is a test descriptionThis is a test description This is a testThis is a test description This is a tesdescriptionThis is a test description This is a test descriptionThis is a test description This is a test  `,200)}</h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}
