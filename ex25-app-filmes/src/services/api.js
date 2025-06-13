// src/services/api.js

const API_URL = 'https://sujeitoprogramador.com/r-api/?api=filmes';

export async function getFilmes() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar filmes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('getFilmes error:', error);
    return [];
  }
}
