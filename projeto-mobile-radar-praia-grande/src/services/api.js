// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://innate-likeable-wire.glitch.me', // link para a API 
});

export default api;
