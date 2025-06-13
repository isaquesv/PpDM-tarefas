// src/pages/Filmes/index.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { getFilmes } from '../../services/api';

export default function Filmes({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const data = await getFilmes();
      setFilmes(data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  function handleNavigate(filme) {
    navigation.navigate('Sinopse', { filme });
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.filmeItem} onPress={() => handleNavigate(item)}>
            <Image style={styles.poster} source={{ uri: item.foto }} />
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  filmeItem: { flexDirection: 'row', marginBottom: 15, backgroundColor: '#eee', borderRadius: 8, overflow: 'hidden' },
  poster: { width: 100, height: 150 },
  info: { flex: 1, padding: 10, justifyContent: 'center' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  avaliacao: { fontSize: 14, color: '#666' },
});
