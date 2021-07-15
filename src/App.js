import './App.css';
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition])
  // const renderCondition = condition ? <div>True</div> : <div>False</div>
  const renderCondition = condition ? 'true' : 'false'
  
  return (
    <div className="App">
      <h1> Developer </h1>
      {/* { condition ? <div>True</div> : <div>False</div>} */}
      {/* {renderCondition} */}
      <div>
        {renderCondition}
      </div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;