import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './components/App';
import ListContainer from './components/ListContainer';
import CompareContainer from './components/CompareContainer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/list" />
                <Route path="/list" component={ListContainer} />
                <Route path="/compare" component={CompareContainer} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
