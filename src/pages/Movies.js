import React, { useState } from 'react';
import Movie from '../components/Movie';
import MovieForm from '../components/MovieForm';

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => {
            return movie.id !== id;
        }));
    }

    const renderMovies = movies.length ? movies.map(movie => {
        return (
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie} /> // component를 사용하기 때문에 component에 key를 넣어 줌
        )
    }) : 'no movie list';

    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie]);
    };

    return (
        <>
            <h1> Movie list </h1>
            <MovieForm addMovie={addMovie} />
            { renderMovies}
        </>
    );
};

export default Movies;

