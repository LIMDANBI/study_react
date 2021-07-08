import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    alert('submitted');
    // e.preventDefault();
    // console.log(username, password);
  };

  return (
    <div className="App">

      <form onSubmit={onSubmit}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />  {/* target.value : input 안에 있는 값 */}
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <button type = "submit">Login</button>
      </form>

    </div>
  );
}

export default App;
