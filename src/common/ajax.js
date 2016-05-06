export function AjaxError(...args) {
    const [response, options, responseBody] = args;
    const err = Error.call(this, response.status + ' ' + response.statusText);

    err.name = this.name = 'AjaxError';
    this.message = err.message;
    this.options = options;
    this.status = response.status;
    this.statusText = response.statusText;
    this.responseBody = responseBody;
}

function checkStatus(options, response) {
    if (response.status < 200 || response.status >= 300) {
        return response.text().then((responseBody) => {
            if (response.headers.get('content-type') === 'application/json') {
                try {
                    responseBody = JSON.parse(responseBody);
                } catch (e) {
                    console.warn('Could not jsonparse response body', responseBody);
                }
            }

            throw new AjaxError(response, options, responseBody);
        });
    }

    return response;
}

function parse(res) {
    const header = res.headers.get('content-type');

    if (header && header.indexOf('application/json') !== -1) {
        return res.json();
    }

    return res.text();
}

function getHeaders(headers) {
    return {
        ...headers
        // any headers needed?
    };
}

export function get(url, config) {
    const options = {
        ...config,
        url,
        headers: getHeaders(),
        credentials: 'include'
    };

    return fetch(url, options)
        .then(response => checkStatus(options, response))
        .then(parse);
}

export function post(url, data = {}) {
    const options = {
        url,
        method: 'POST',
        body: JSON.stringify(data),
        headers: getHeaders({
            'Content-Type': 'application/json'
        }),
        credentials: 'include'
    };

    return fetch(url, options)
        .then(response => checkStatus(options, response))
        .then(parse);
}

export default {
    get,
    post
};
