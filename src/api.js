import axios from 'axios';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.REACT_APP_BASE_URL}/v1`,
  headers: {
    'Content-Type': 'application/json',
    // eslint-disable-next-line no-dupe-keys
    'Content-Type': 'multipart/form-data',
    'ngrok-skip-browser-warning': 'true'
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
