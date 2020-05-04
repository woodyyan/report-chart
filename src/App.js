import React from 'react';
import logo from './logo.svg';
import './App.css';
import OverviewChart from './component/OverviewChart'
import { Row } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <OverviewChart />
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
