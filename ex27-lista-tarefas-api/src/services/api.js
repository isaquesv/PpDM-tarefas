import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tarefa-backend.onrender.com',
  timeout: 5000,
});

export default api;
