// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default api;
