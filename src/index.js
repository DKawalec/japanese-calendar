import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        {routes}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
