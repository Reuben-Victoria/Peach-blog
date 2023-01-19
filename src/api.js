import axios from 'axios';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.REACT_APP_BASE_URL}/v1`,
  headers: { 'Access-Control-Allow-Origin': '' }
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
