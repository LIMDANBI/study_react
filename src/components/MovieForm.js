import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');

    const resetForm = () => {
        setMovieTitle(''); // 입력 후 지워 줌 
        setMovieYear('');
    } 
    
    const onSubmit = (event) => {
        event.preventDefault(); // form 사용 시 submit을 했을 때 page reloading 방지
        addMovie({
            title : movieTitle,
            year : movieYear,
        });
        resetForm();
    };


    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={movieTitle} placeholder="영화제목" onChange={e => setMovieTitle(e.target.value)} /> <br />
            <input type="text" value={movieYear} placeholder="개봉년도" onChange={e => setMovieYear(e.target.value)} /> <br />
            <button type="submit">영화추가</button>
        </form>

    );
};

export default MovieForm;