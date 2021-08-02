import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle(''); // 입력 후 지워 줌 
        setMovieYear('');
    } 

    const validateForm = () => {
        resetErrors();
        let validated = true;
        if(!movieTitle) {
            setTitleError('영화제목을 넣어주세요');
            validated = false;
        }
        if(!movieYear){
            setYearError('개봉년도를 넣어주세요');
            validated = false
        }
        return validated;
    }

    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    };

    const onSubmit = (event) => {
        event.preventDefault(); // form 사용 시 submit을 했을 때 page reloading 방지
        if(validateForm()){
            addMovie({
                id : Date.now(), // 임의로 timestamp를 id로 사용
                title : movieTitle,
                year : movieYear,
            });
            resetErrors();
            resetForm();
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={movieTitle} placeholder="영화제목" onChange={e => setMovieTitle(e.target.value)} /> <br />
            <div style = {{color : 'red'}}>{titleError}</div>
            <input type="number" value={movieYear} placeholder="개봉년도" onChange={e => setMovieYear(e.target.value)} /> <br />
            <div style = {{color : 'red'}}>{yearError}</div>
            <button type="submit">영화추가</button>
        </form>

    );
};

export default MovieForm;