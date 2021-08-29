import React, { useState, useEffect } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import apiSettings from '../../API';
import NoImage from '../../images/no_image.jpg';
import { MoviesState } from '../../models/movie';


const initialState: MoviesState = {
    page: 1,
    total_pages: 1,
    results: [],
    total_results: 1

};

function Hero() {
    const [state, setState] = useState<MoviesState>(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page: number, searchTerm: string = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await apiSettings.fetchMovies(searchTerm, page);
            console.log(movies);
            setState(prev => {
                return {
                    ...movies,
                    results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
                };
            });
            setLoading(false);
        } catch (error) {
            setError(true);
            console.error(error);
        }
    };

    // initial render
    useEffect(() => {
        fetchMovies(1);
    }, []);


    console.log(state)
    return (
        <div>
            
            {loading ? <p>...loading</p> : state.results.map(movie => {
               return <p key={movie.id}>{movie.original_title}</p>;
            })}
        </div>
    );
}

export default Hero;
