import React from 'react';

const Movie = ({movie}) => { // props => props.movie.title / {movie} => movie.title (원하는 것만 빼올 수 있음 !!)
    return (
        <div className="movie">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-year">{movie.year}</div>
        </div>
    );
};

export default Movie;