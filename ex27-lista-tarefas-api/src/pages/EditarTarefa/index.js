import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import api from '../../services/api';

export default function EditarTarefa({ route, navigation }) {
  const { id } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function carregarTarefa() {
      try {
        const response = await api.get(`/tasks/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch {
        Alert.alert('Erro', 'Não foi possível carregar a tarefa.');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    }
    carregarTarefa();
  }, [id, navigation]);

  async function salvar() {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    setSaving(true);
    try {
      await api.put(`/tasks/${id}`, { title: title.trim(), description: description.trim() });
      navigation.goBack();
    } catch {
      Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
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
        editable={!saving}
      />
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 100 }]}
        multiline
        editable={!saving}
      />
      <View style={styles.botoes}>
        <Button title="Cancelar" onPress={() => navigation.goBack()} color="gray" disabled={saving} />
        <Button title={saving ? 'Salvando...' : 'Salvar'} onPress={salvar} color="green" disabled={saving} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
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
