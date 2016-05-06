import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router } from 'react-router';
import 'isomorphic-fetch';
import 'core-js';
import configureStore from './config/configureStore';
import getRoutes from './config/router';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    (
    <Provider store={ store }>
        <div>
            <Router history={history} routes={getRoutes()}/>
        </div>
    </Provider>
    ),
    document.getElementById('main')
);