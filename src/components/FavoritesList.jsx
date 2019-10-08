import React, {useState, useEffect} from 'react';

import './FavoritesList.scss';

import MovieCard from './MovieCard';

import LocalStoreClass from './localStoreClass';

const localStore = new LocalStoreClass();

const getFavorites = (setFavoritesList) => {
  setFavoritesList(localStore.getMovies())
}

const FavoritesList = ()=> {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    getFavorites(setFavoritesList);
  }, []);  
  

  const favorites = favoritesList.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />
  });

  return (
    <div className="favorites_list">
      <h2>Favorites</h2>
      <div>{favorites}</div>
    </div>
  )
};

export default FavoritesList;