import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import { render } from '@testing-library/react';

function App() {

  const [movies, setMovies] = useState(
    [
      { title: 'harry potter1', year: 2001 },
      { title: 'harry potter2', year: 2002 },
      { title: 'harry potter3', year: 2004 },
      { title: 'harry potter4', year: 2005 },
      { title: 'harry potter5', year: 2007 },
    ]
  );
  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title} /> // component를 사용하기 때문에 component에 key를 넣어 줌
    )
  });

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie ]);
  };

  return (
    <div className="App">
      <h1> Movie list </h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;