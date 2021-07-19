import './App.css';
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  const movies = [
    { title: 'harry potter1', year: 2001 },
    { title: 'harry potter2', year: 2002 },
    { title: 'harry potter3', year: 2004 },
    { title: 'harry potter4', year: 2005 },
    { title: 'harry potter5', year: 2007 },
  ];

  const renderMovies = movies.map(movie => {
    return (
      // key(mape을 사용할 때 unique한 값을 넣어 주어야 함, 데이터베이스에서 정보를 가지고 온 경우 주 key(ID))
      // => data 추가, 생성, 삭제 시 리액트가 어떤 아이템인지 식별하는데 도움을 줌 
      <div className="movie" key={movie.title}> 
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    )
  });

  return (
    <div className="App">
      <h1> Movie list </h1>
      {renderMovies}
      {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div>

      <div className="movie">
        <div className="movie-title">{movies[1].title}</div>
        <div className="movie-year">{movies[1].year}</div>
      </div>

      <div className="movie">
        <div className="movie-title">{movies[2].title}</div>
        <div className="movie-year">{movies[2].year}</div>
      </div> */}

    </div>
  );
}

export default App;