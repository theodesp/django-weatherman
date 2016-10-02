import "whatwg-fetch";

const API_ROOT = "/api/weather/";

// Fetches an API response and returns the result as JSON
const apiError = (status, message) => {
    let err = new Error(message);
   
    return err;
};

const onAPIError = (res) => {
    return res.json().then(function (json) {
        return Promise.reject(apiError(res.status, json.message));
    });
};

const onAPIResponse = (res)  => {
    return res.json().then( (data) =>  {
        return Promise.resolve(data);
    });
};

export default class API {
    static fetchWeatherData(endpoint)  {
        const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

        return fetch(fullUrl)
            .catch(onAPIError)
            .then(onAPIResponse);
    };
}