import React, { useState } from 'react';
// Component 사용 => 반복 제거 가능 
// component 구성 : import React, {} from 'react', 함수 작성 -> jsx 리턴, export default -> 다른 곳에서 import 해서 사용 
// counter관련 logic이 들어 있음 => App.js에서 import해서 사용
// 사용되어지는 component = 자식 component 

//props라는 object를 통해서 부모 component에서 보낸 props를 받아올 수 있음 (string 뿐만 아니라 state도 보낼 수 o)
const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const clickString = props.click || 'Click'; // props.click이 존재하면 사용, 존재하지 않으면 Click(기본 값) 사용

    return (
        <button onClick={increment}>{clickString} {count} </button>
    );
};

export default Counter; 