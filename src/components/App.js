import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import AddCragFormContainer from '../containers/AddCragFormContainer';
import CragListContainer from '../containers/CragListContainer';
import CragDetailsContainer from '../containers/CragDetailsContainer';

import '../common-styles/_common.scss';
import styles from './App.module.scss';

const App = () => (
  <Router>
    <div className={styles.root}>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/add-crag">
          <section role="main">
            <AddCragFormContainer />
          </section>
        </Route>
        <Route path="/crags">
          <section role="main">
            <CragDetailsContainer />
          </section>
        </Route>
        <Route path="/">
          <section role="main" className="centered-contents">
            <img src="/logo192.png" alt="logo" />
            <CragListContainer />
          </section>
        </Route>
      </Switch>

      <nav>
        <ul className="styleless">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-crag">Add Crag</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </Router>
);

export default App;
