import React from 'react';
import {
  Link, 
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import About from './About';

export default (props) => {
  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
      </Switch>
    </div>
  )
}

