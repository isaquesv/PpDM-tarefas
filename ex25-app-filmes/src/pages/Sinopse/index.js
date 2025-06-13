// src/pages/Sinopse/index.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Sinopse({ route }) {
  const { filme } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: filme.foto }} style={styles.poster} />
      <Text style={styles.titulo}>{filme.nome}</Text>
      <Text style={styles.sinopseTitle}>Sinopse:</Text>
      <Text style={styles.sinopse}>{filme.sinopse}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  poster: { width: '100%', height: 400, borderRadius: 8, marginBottom: 15 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  sinopseTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  sinopse: { fontSize: 16, lineHeight: 24 },
});
