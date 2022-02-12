import axios from 'axios';

const responseInterceptor = axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default responseInterceptor;
