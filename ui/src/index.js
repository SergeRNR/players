import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './components/App';
import List from './components/List';
import Compare from './components/Compare';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/list" />
                <Route path="/list" component={List} />
                <Route path="/compare" component={Compare} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
