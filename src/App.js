import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { render } from '@testing-library/react';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');

  // movies가 state가 아니기 때문에 '영화추가'를 눌러도 rendering이 되지 x 
  // useEffect(() =>{
  //   console.log('render');
  // })
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

  const addMovie = (event) => {
    event.preventDefault(); // form 사용 시 submit을 했을 때 page reloading 방지
    // console.log(movieTitle, movieYear); // 출력 확인
    // movies.push({
    //   title: movieTitle,
    //   year: movieYear
    // })
    setMovies([
      // 기존 배열(...movies (구조 분해 할당)) + 새로 추가 {}
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
      }
    ]);
    setMovieTitle(''); // 입력 후 지워 줌 
    setMovieYear(''); 
  };


  return (
    <div className="App">
      <h1> Movie list </h1>
      <form onSubmit={addMovie}>
        <input type="text" value={movieTitle} placeholder="영화제목" onChange={e => setMovieTitle(e.target.value)} /> <br />
        <input type="text" value={movieYear} placeholder="개봉년도" onChange={e => setMovieYear(e.target.value)} /> <br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;