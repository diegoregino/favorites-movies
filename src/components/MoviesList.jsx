import React, { useState, useEffect } from 'react';

//Import styles
import './MoviesList.scss';

import environment from '../environment';

//Import Components
import MovieCard from './MovieCard';

const API = `${environment.apiUrl}popular?api_key=${environment.apiKey}&language=en-US`;

const getMovies = async (setMovies) => {
  try {
    const result = await fetch(API);
    const movies = await result.json();
    const movieResult = movies.results.length >= 12 ? movies.results.slice(0, 12) : movies.results;
    setMovies(movieResult);

  } catch (error) {
    console.error('Error :(', error);
  }
}

const MoviesList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(setMovies);
  }, []);  

  const moviesList = movies.map((movie) => {    
    return <MovieCard key={movie.id} movie={movie} />
  });

  return (
    <>
      <h2>Popular</h2>
      <section className="popular_content">
        {moviesList}
      </section>
    </>
  )
};

export default MoviesList;