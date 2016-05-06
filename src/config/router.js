import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from '../app/App';
import HelloWorld from '../hello-world/HelloWorld';

export default () => (
    <Route path="/" name="app" component={App}>
        <IndexRoute component={HelloWorld}/>
        <Route path="hello-world" component={HelloWorld}/>
    </Route>
);
