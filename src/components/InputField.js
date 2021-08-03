import React from 'react'

// component로 빼내서 재사용 가능한 장점!! ex) tyle={{borderColor : 'red'}} 한개만 바꾸면 두개의 input 필드 창에 적용 가능 
// 변경 될 수 있는 type, value, placeholder, onChange, errorMessage를 props로 받아옴
const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) => {
    return (
        // component는 하나의 element가 있어야함 => div로 감싸 줌 / 생략하고 싶은 경우 React.Fragment (생략가능)
        <>
            <input style={{borderColor : 'red'}} type={type} value={value} placeholder={placeholder} onChange={onChange} /> <br />
            <div style={{ color: 'red' }}>{errorMessage}</div>
            {/* <input type="number" value={movieYear} placeholder="개봉년도" onChange={e => setMovieYear(e.target.value)} /> <br />
            <div style={{ color: 'red' }}>{yearError}</div> */}
        </>
    )
};

export default InputField;