import axios from 'axios';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.REACT_APP_BASE_URL}/v1`,
  headers: {
    'Content-Type': 'application/json',
    // eslint-disable-next-line no-dupe-keys
    'Content-Type': 'multipart/form-data'
  }
});

const token = localStorage.getItem('userToken');
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;
