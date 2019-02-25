import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Technology from './pages/Technology';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/technology' component={Technology} />
              <Route path='/training' component={Training} />
          </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
