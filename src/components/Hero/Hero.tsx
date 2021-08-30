import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {  BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import { useHomeFetch } from '../../hooks/useHeroFetch';

// useHomeFetch;


function Hero() {
    const [state] = useHomeFetch();
    console.log(state);
    return (
        <Carousel fade>
            {state.results.slice(0, 10).map(movie => (
                <Carousel.Item key={movie.title}>
                    <img
                        className="d-block w-100"
                        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Hero;
