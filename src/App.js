import './App.css';
import React, { useEffect, useState } from 'react';
// useEffect 사용 -> component가 렌더링 될 떄마다 리액트에게 어떤 일을 실행시켜달라고 할 수 있음 

function App() {
  const [count, setCount] = useState(0);
  const [happy, setHappy] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]) //count가 변경될 떄만 실행되도록 ! (Happy가 변경되도 console.log(count);는 실행되지 않음 ! ) / [count, happy] => count, happy가 변경될 때 !

  useEffect(() => {
    console.log('first rendering');
  }, []) // empty array('[]')를 넣어주면 한번만 실행 ! 
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1> Danbi's Story </h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setHappy(happy + 1)}>Happy</button>
    </div>
  );
}

export default App;
