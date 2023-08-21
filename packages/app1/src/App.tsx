import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from 'app2/src/interfaces/testInterface';
import Input from './lib-components/src/components/Input';

function App() {
  const arquivo: Test = {
    nome: "",
    idade: 0
  }

  console.log(arquivo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Input />

      </header>
    </div>
  );
}

export default App;
