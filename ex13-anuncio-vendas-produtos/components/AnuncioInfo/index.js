// components/AnuncioInfo/index.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AnuncioInfo({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{produto.titulo}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
  },
});
