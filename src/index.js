import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import configureStore from './store/configureStore';
import HomePage from './screens/home/';
import TestPage from './screens/test/';
import Navigation from './components/navigation/';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      {/*<Navigation/>*/}
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/test" exact>
          <TestPage/>
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
