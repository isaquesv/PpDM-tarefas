// src/pages/ConsultaCep/index.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';

export default function ConsultaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  async function buscarCep() {
    try {
      const response = await api.get(`${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      setEndereco(null);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cep x Endereço</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP..."
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
        />
        <TouchableOpacity style={styles.iconButton} onPress={buscarCep}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {endereco && (
        <View style={styles.resultado}>
          <Text>Cep: {endereco.cep}</Text>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  iconButton: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 4,
  },
  resultado: {
    marginTop: 20,
  },
});
