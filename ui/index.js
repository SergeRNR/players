import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from './components/App';
import List from './components/List';
import Compare from './components/Compare';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/list" />
            <Route path="/list" component={List} />
            <Route path="/compare" component={Compare} />
        </Route>
    </Router>
), document.getElementById('app'));
