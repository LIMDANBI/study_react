import React from 'react';

const Movie = ({ movie, removeMovie }) => { // props => props.movie.title / {movie} => movie.title (원하는 것만 빼올 수 있음 !!)
    return (
        <div className="movie">
            <div className="movie-title">
                {movie.title}
                <span className="movie-year">
                    ({movie.year})
                </span>
            </div>
            <div>
                <button onClick={() => removeMovie(movie.id)}>삭제</button>
            </div>

        </div>
    );
};

export default Movie;