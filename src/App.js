import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [text, setText] = useState('danbi');
  const onSubmit = () => {
    alert('submitted');
  };

  const onKeyUp = (e) => {
    if (e.kㅊey === 'Enter') {
      onSubmit();
    }
    console.log('key up');
  }

  // let text = 'danbi';

  const updateText = () => {
    // text = 'lim';
    if(text === 'danbi')
      setText('lim');
    else
    setText('danbi');
    console.log(text);  
  }

  // console.log(text);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>submit</button>
      <br/> <br/>
      <span>{text}</span>
      <button onClick={updateText}>Update</button>

    </div>
  );
}

export default App;
