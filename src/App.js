import './App.css';
import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
// Component 사용 => 반복 제거 가능 
// component 구성 : import React, {} from 'react', 함수 작성 -> jsx 리턴, export default -> 다른 곳에서 import 해서 사용 
// 다른 component를 import해서 사용하는 component = 부모 component 
// Props : 부모 component에서 자식 component로 데이터를 보내주고 싶을 때 사용 !

function App() {

  const [buttonName, setButtonName] = useState('클릭');
  const clickButton = () => {
    setButtonName('click');
  }
  
  return (
    <div className="App">
      <h1> Danbi's Story </h1>
      <Counter click = "click1"/> {/* 부모애서 click(click1)이라는 props를 보냄 (string )*/}
      <Counter click = {buttonName}/> {/* (state)*/}
      <Counter />
      <button onClick = {clickButton}>change</button>
    </div>
  );
}

export default App;
// props (parent component -> child component)