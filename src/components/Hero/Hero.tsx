import React, { useState, useEffect } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import apiSettings from '../../API';
import NoImage from '../../images/no_image.jpg';
import { MoviesState } from '../../models/movie';
import { useHomeFetch } from '../../hooks/useHeroFetch';

// useHomeFetch;


function Hero() {
    const [state] = useHomeFetch();
    console.log(state);
    return (
        <div>
            {state.results && state.results.map(movie => <p key={movie.id}>{movie.original_title}</p>)}
        </div>
    );
}

export default Hero;
