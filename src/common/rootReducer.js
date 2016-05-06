import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import * as rootActions from './rootActions';

function app(state = {}, action) {
    switch (action.type) {
        case rootActions.SHOW_ERROR:
            console.warn(action);
            return {
                ...state,
                error: action.payload,
            errorDetails: action.meta
    };

default: return state;
}
}

export default combineReducers({
    app,
    routing
});
