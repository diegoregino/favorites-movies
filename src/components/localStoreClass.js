class LocalStoreClass {

  addMovie(movie) {
    const movies = this.getMovies() || [];
    const favsIs = this.movieIs(movies, movie);
    if (!favsIs) {
      const addMovies = movies.concat(movie);
      this.addToLocalStorage(addMovies);
    }
  }

  getMovies() {
    const movies = JSON.parse(localStorage.getItem('favs'));
    return movies !== null ? movies : [];
  }

  deleteMovie(movie) {
    const movies = this.getMovies();
    const moviesIdx = movies.map(fav => fav.id).indexOf(movie.id);  
    const newFavs = movies.splice(moviesIdx, 1);    
    this.addToLocalStorage(movies);
  }

  myMovieIsFav(movie) {
    const movies = this.getMovies();
    return this.movieIs(movies, movie);
  }

  addToLocalStorage(list) {
    localStorage.setItem('favs', JSON.stringify(list));
  }

  movieIs(moviesList, movie) {
    const favsIs = moviesList.filter(fav => fav.id === movie.id);
    return favsIs.length > 0;
  }
}

export default LocalStoreClass;