import axios from 'axios';

// default axios config
/* eslint-disable no-undef */
axios.defaults.withCredentials = true;

// Add a request interceptor
/* eslint-disable no-undef */
axios.interceptors.request.use((config) => {
  // Do something before request is sent
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
/* eslint-disable no-undef */
axios.interceptors.response.use((response) => {
  // Do something with response data
}, (error) => {
  // Do something with response error
  return Promise.reject(error);
});

export default axios;
