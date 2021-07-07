import logo from './logo.svg';
import './App.css';

function App() {

  const onSubmit = () => {
    alert('submitted');
  };

  const onKeyUp = (e) => {
    if (e.kㅊey === 'Enter') {
      onSubmit();
    }
    console.log('key up');
  }

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
    </div>
  );
}

export default App;
