import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import 'core-js';
import configureStore from './config/configureStore';

const store = configureStore();

render(
    (
    <Provider store={ store }>
        <div>
            hei
        </div>
    </Provider>
    ),
    document.getElementById('main')
);