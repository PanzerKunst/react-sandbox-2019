import React from 'react';
import '../common-styles/_common.scss';
import AddCragFormContainer from '../containers/AddCragFormContainer';
import CragListContainer from '../containers/CragListContainer';

function App() {
  return (
    <div className="centered-contents">
      <img src="/logo192.png" alt="logo" />
      <CragListContainer />
      <AddCragFormContainer />
    </div>
  );
}

export default App;
