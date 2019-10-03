import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCrag from '../containers/AddCrag';
import CragList from '../containers/CragList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddCrag />
        <CragList />
      </header>
    </div>
  );
}

export default App;
