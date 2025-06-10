// src/pages/Perfil/index.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

export default function Perfil() {
  const [usuario, setUsuario] = useState('');
  const [dados, setDados] = useState(null);

  async function buscarPerfil() {
    if (!usuario.trim()) return;
    try {
      const response = await api.get(`/${usuario}`);
      setDados(response.data);
      Keyboard.dismiss();
    } catch (error) {
      setDados(null);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil dos Devs</Text>

      <View style={styles.fotoArea}>
        {dados?.avatar_url && (
          <Image source={{ uri: dados.avatar_url }} style={styles.foto} />
        )}
      </View>

      <View style={styles.buscaArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite o login git..."
          value={usuario}
          onChangeText={setUsuario}
        />
        <TouchableOpacity style={styles.botao} onPress={buscarPerfil}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {dados && (
        <View style={styles.resultado}>
          <Text style={styles.texto}>Id: {dados.id}</Text>
          <Text style={styles.texto}>Nome: {dados.name}</Text>
          <Text style={styles.texto}>Repositórios: {dados.public_repos}</Text>
          <Text style={styles.texto}>Criado em: {new Date(dados.created_at).toLocaleDateString()}</Text>
          <Text style={styles.texto}>Seguidores: {dados.followers}</Text>
          <Text style={styles.texto}>Seguindo: {dados.following}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: 'bold',
  },
  fotoArea: {
    alignItems: 'center',
    marginBottom: 16,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buscaArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  botao: {
    backgroundColor: 'green',
    padding: 10,
    marginLeft: 8,
    borderRadius: 4,
  },
  resultado: {
    marginTop: 16,
  },
  texto: {
    fontSize: 16,
    marginBottom: 4,
  },
});