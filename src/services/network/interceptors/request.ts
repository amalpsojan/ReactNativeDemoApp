import axios from 'axios';

const requestInterceptor = axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

export default requestInterceptor;
