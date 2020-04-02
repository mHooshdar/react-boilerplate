import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC<{}> = () => {
  console.log('ssss');

  const a = (asdas: string): void => {
    console.log(asdas);
  };

  const [b, setA] = useState('s');
  useEffect(() => {});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editasdlkaslkd lasmd lsmad lmasldm
          <code>s /App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
