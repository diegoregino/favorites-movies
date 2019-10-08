import React, { useState } from 'react';

import LocalStoreClass from './localStoreClass';

//Import styles
import './MovieCard.scss';

import environment from '../environment';

const dateFormat = (date) => {
  const dateMovie = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return dateMovie.toLocaleDateString("en-US", options);
}

const localStore = new LocalStoreClass();

const movieIsFavorite = (movie) => {
  const isFavorite = localStore.myMovieIsFav(movie);
  return isFavorite ? 'fas fa-heart' : 'far fa-heart';
}

const handleFavBtnClick = (setIconFav, movie) => {
  const myMovieIsFav = localStore.myMovieIsFav(movie);
  if (myMovieIsFav) {
    localStore.deleteMovie(movie);        
  }else {
    localStore.addMovie(movie); 
  }  
  
  setIconFav(movieIsFavorite(movie));
}

const MovieCard = ({ movie }) => {  

  const [iconFav, setIconFav] = useState(movieIsFavorite(movie));

  const styleMovie = {
    'background': `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) ),url(${environment.imagesUrl}${movie.poster_path})`,
    'backgroundSize': 'cover',
  }

  return (
    <div style={styleMovie} className="movie_card">
      <button onClick={() => { handleFavBtnClick(setIconFav, movie) }} className="get_fav_btn"><i className={iconFav}></i></button>
      <div className="title_movie">
        <h3>{movie.title}</h3>
        <div>{dateFormat(movie.release_date)}</div>
        <div><b>Popularity </b>{movie.popularity}</div>
      </div>
    </div>
  )
};

export default MovieCard;