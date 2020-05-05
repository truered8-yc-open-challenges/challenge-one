import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Events from './components/js/Events';
import Event from './components/js/Event'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Events} />
    <Route path="/event" component={Event} />
  </Route>
);