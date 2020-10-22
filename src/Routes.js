import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './main.scss';

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
