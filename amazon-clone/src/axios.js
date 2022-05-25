import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-6c11d.cloudfunctions.net/api'
        // 'http://localhost:5001/clone-6c11d/us-central1/api' 
  // This is where the API (cloud function) URL is
})

export default instance;

// @babel/eslint-parser