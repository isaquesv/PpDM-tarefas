import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

export default function Tarefas({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) carregarTarefas();
  }, [isFocused]);

  async function carregarTarefas() {
    const dados = await AsyncStorage.getItem('tarefas');
    setTarefas(dados ? JSON.parse(dados) : []);
  }

  async function removerTarefa(index) {
    const novas = [...tarefas];
    novas.splice(index, 1);
    await AsyncStorage.setItem('tarefas', JSON.stringify(novas));
    setTarefas(novas);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.texto}>{item}</Text>
            <TouchableOpacity onPress={() => removerTarefa(index)}>
              <Ionicons name="remove-circle-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.botaoAdd}
        onPress={() => navigation.navigate('AdicionarTarefa')}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  texto: { fontSize: 16 },
  botaoAdd: {
    backgroundColor: '#007AFF',
    borderRadius: 30,
    padding: 16,
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 5,
  },
});
