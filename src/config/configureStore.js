import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../common/rootReducer';
import crashReporter from './crashReporterMiddleware';

const middlewares = [
    crashReporter,
    thunk,
    createLogger({
        collapsed: true
    })
];

const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
