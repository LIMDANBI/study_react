import './App.css';
import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
// Component 사용 => 반복 제거 가능 
// component 구성 : import React, {} from 'react', 함수 작성 -> jsx 리턴, export default -> 다른 곳에서 import 해서 사용 

function App() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="App">
      <h1> Danbi's Story </h1>
      <Counter/><Counter/><Counter/>
    </div>
  );
}

export default App;
