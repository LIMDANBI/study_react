import React, {useState } from 'react';
// Component 사용 => 반복 제거 가능 
// component 구성 : import React, {} from 'react', 함수 작성 -> jsx 리턴, export default -> 다른 곳에서 import 해서 사용 
// counter관련 logic이 들어 있음 => App.js에서 import해서 사용

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <button onClick={increment}>Click {count} </button>
    );
};

export default Counter; 