import React, { useState, useEffect } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import apiSettings from '../../API';
import NoImage from '../../images/no_image.jpg';

function Hero() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page: number, searchTerm: string = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await apiSettings.fetchMovies(searchTerm, page);
            console.log(movies);
        } catch (error) {
            setError(true);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMovies(1);
        return () => {

        };
    }, []);

    return (
        <div>
            HERO
        </div>
    );
}

export default Hero;
