import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About, Contact } from './pages';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ '/' }>
            <Home />
          </Route>
          <Route path={ '/about' }>
            <About />
          </Route>
          <Route path={ '/contact' }>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
