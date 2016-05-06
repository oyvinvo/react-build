import { showError } from '../common/rootActions';

const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        if (!(err instanceof Error)) {
            return store.dispatch(showError(new Error('Error thrown not instanceof error. Stop it.')));
        }

        if (store.getState().app.error) {
            console.warn('Got error, already handled. Skip.');
            console.error(err);
            return err;
        }

        return store.dispatch(showError(err));
    }
};

export default crashReporter;
