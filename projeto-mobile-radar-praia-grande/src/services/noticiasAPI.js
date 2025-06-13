// services/noticiaAPI.js
import api from './api';

export const fetchNoticias = async () => {
  try {
    const response = await api.get('/noticias');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar notícias');
  }
};

export const cadastrarNoticia = async (novaNoticia) => {
  try {
    const response = await api.post('/noticias', novaNoticia);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao cadastrar notícia');
  }
};

export const editarNoticiaAPI = async (id, noticiaAtualizada) => {
  try {
    const response = await api.put(`/noticias/${id}`, noticiaAtualizada);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao editar notícia');
  }
};

export const deletarNoticiaAPI = async (id) => {
  try {
    const response = await api.delete(`/noticias/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao deletar notícia');
  }
};


