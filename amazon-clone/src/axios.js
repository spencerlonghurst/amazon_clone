import axios from 'axios';

const instance = axios.create({
  baseURL: '...' // This is where the API (cloud function) URL will be
})

export default instance;