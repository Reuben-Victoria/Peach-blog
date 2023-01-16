import axios from 'axios';

export default axios.create({
  baseURL: 'https://b9eb-196-1-187-142.eu.ngrok.io/api/v1/',
  headers: {
    'content-type': 'multipart/form-data',
    accept: 'application/json',
    Authorization: JSON.stringify(localStorage.getItem('userToken'))
  }
});
