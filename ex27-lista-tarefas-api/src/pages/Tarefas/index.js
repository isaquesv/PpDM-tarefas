import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import api from '../../services/api';

export default function Tarefas({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      carregarTarefas();
    }
  }, [isFocused]);

  async function carregarTarefas() {
    setCarregando(true);
    try {
      const response = await api.get('/tasks');
      setTarefas(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
    } finally {
      setCarregando(false);
    }
  }

  function confirmarExcluir(id) {
    Alert.alert(
      'Excluir Tarefa',
      'Tem certeza que deseja excluir esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => excluirTarefa(id) },
      ]
    );
  }

  async function excluirTarefa(id) {
    try {
      await api.delete(`/tasks/${id}`);
      carregarTarefas();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a tarefa.');
    }
  }

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.titulo}>{item.title}</Text>
        <Text style={styles.descricao}>{item.description}</Text>
        <View style={styles.botoes}>
          <TouchableOpacity onPress={() => navigation.navigate('EditarTarefa', { id: item.id })}>
            <Text style={styles.botaoEditar}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => confirmarExcluir(item.id)}>
            <Text style={styles.botaoExcluir}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>Tarefas</Text>

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() => navigation.navigate('AdicionarTarefa')}
      >
        <Text style={styles.textoBotao}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      {carregando ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  tituloPagina: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 15,
    color: '#555',
    marginBottom: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  botaoEditar: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginRight: 20,
  },
  botaoExcluir: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
});
