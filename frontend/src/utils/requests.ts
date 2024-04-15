import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";

export function requestBackend(config: AxiosRequestConfig) {

    const headers = config.headers
        ? {
            ...config.headers?.Accept
        }
        : config.headers;

    return axios( { ...config, baseURL: BASE_URL, headers } )
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function (config) {
    // DO SOMETHING BEFORE REQUEST IS SENT
    return config;
        },
    function (error) {
    // DO SOMETHING WITH REQUEST ERROR
    return Promise.reject(error);
        }
    );

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
    function (response) {
    // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
    return response;
        },
    );

