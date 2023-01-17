import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://76cb-196-1-187-142.eu.ngrok.io/api/v1/',
  headers: {
    'content-type': 'multipart/form-data',
    accept: 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
