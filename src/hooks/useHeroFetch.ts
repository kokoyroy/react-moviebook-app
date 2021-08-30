import { useState, useEffect, useRef } from "react";
import apiSettings from "../API";
import { MoviesState } from "../models/movie";

const initialState: MoviesState = {
    page: 1,
    total_pages: 1,
    results: [],
    total_results: 1

};

export const useHomeFetch = (): [MoviesState] => {
    const [state, setState] = useState<MoviesState>(initialState);
    const [error, setError] = useState(false);

    const fetchMovies = async (page: number, searchTerm: string = '') => {
        try {
            const movies = await apiSettings.fetchMovies(searchTerm, page);
            console.log(movies);
            setState(prev => {
                return {
                    ...movies,
                    results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
                };
            });
        } catch (err) {
            setError(true);
            console.log(err);
        }
    };

    // initial render
    useEffect(() => {
        fetchMovies(1);
    }, []);

    return [state];
};