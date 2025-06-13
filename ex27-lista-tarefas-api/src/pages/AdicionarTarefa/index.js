import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import api from '../../services/api';

export default function AdicionarTarefa({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function salvar() {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      await api.post('/tasks', { title: title.trim(), description: description.trim() });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        editable={!loading}
      />
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 100 }]}
        multiline
        editable={!loading}
      />
      <View style={styles.botoes}>
        <Button title="Cancelar" onPress={() => navigation.goBack()} color="gray" disabled={loading} />
        <Button title={loading ? 'Salvando...' : 'Salvar'} onPress={salvar} color="green" disabled={loading} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#fff',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
