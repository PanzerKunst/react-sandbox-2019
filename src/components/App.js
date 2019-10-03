import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCragFormContainer from '../containers/AddCragFormContainer';
import CragListContainer from '../containers/CragListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddCragFormContainer />
        <CragListContainer />
      </header>
    </div>
  );
}

export default App;
