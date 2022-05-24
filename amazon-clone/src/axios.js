import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-6c11d/us-central1/api' // This is where the API (cloud function) URL iss
})

export default instance;