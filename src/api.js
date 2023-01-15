import axios from 'axios';

const formData = new FormData();
export default axios.create({
  baseURL: 'https://2f19-196-1-187-142.eu.ngrok.io/api/v1/',
  data: formData,
  headers: {
    'content-type': 'multipart/form-data'
  }
});
