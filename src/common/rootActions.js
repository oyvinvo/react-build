export const SHOW_ERROR = 'SHOW_ERROR';

export function showError(error) {
    console.error(error);
    console.error(error.stack || error.message);

    let response;

    if (error.name === 'AjaxError' && error.responseBody) {
        response = error.responseBody;
    }

    return {
        type: SHOW_ERROR,
        payload: error,
        meta: {
            response
        }
    };
}
