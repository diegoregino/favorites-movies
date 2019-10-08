import React from 'react';

//Import styles
import './MovieCard.scss';

import environment from '../environment';

const dateFormat = (date) => {
  const dateMovie = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return dateMovie.toLocaleDateString("en-US", options);
}

const MovieCard = ({ movie }) => {  

  const styleMovie = {
    'background': `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) ),url(${environment.imagesUrl}${movie.poster_path})`,
    'backgroundSize': 'cover',
  }

  return (
    <div style={styleMovie} className="movie_card">
      <button className="get_fav_btn"><i class="fas fa-heart"></i></button>
      <div className="title_movie">        
        <h3>{movie.title}</h3>
        <div>{dateFormat(movie.release_date)}</div>
      </div>
    </div>
  )
};

export default MovieCard;