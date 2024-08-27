import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';

function Favorites() {
    const [films, setFilms] = useState([]);

    const endpoints = [
        'https://api.themoviedb.org/3/movie/popular?api_key=95f50caa461c4aeecaff28e0a6458241',
        'https://api.themoviedb.org/3/movie/now_playing?api_key=95f50caa461c4aeecaff28e0a6458241',
        'https://api.themoviedb.org/3/movie/upcoming?api_key=95f50caa461c4aeecaff28e0a6458241',
        'https://api.themoviedb.org/3/movie/top_rated?api_key=95f50caa461c4aeecaff28e0a6458241'
    ];

    useEffect(() => {
        async function fetchAllFilms() {
            try {
                const responses = await Promise.all(endpoints.map(url => fetch(url)));
                const data = await Promise.all(responses.map(response => response.json()));

                const allFilms = data.flatMap(response => response.results || []);
                const filteredFilms = allFilms.filter(film => film.vote_average >= 8.5);

                setFilms(filteredFilms);
            } catch (error) {
                console.error('Error fetching films:', error);
            }
        }

        fetchAllFilms();
    }, []);

    return (
        <div>
            <h2>Top Rated Films</h2>
            {films.length > 0 ? (
                <Carousel images={films.map(film => `https://image.tmdb.org/t/p/w500${film.poster_path}`)} />
            ) : (
                <p>No films found with a rating of 85% or higher.</p>
            )}
        </div>
    );
}

export default Favorites;
