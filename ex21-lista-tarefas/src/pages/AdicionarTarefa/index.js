import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AdicionarTarefa({ navigation }) {
  const [texto, setTexto] = useState('');

  async function salvar() {
    if (!texto.trim()) return;
    const dados = await AsyncStorage.getItem('tarefas');
    const lista = dados ? JSON.parse(dados) : [];
    lista.push(texto.trim());
    await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome da Tarefa"
        value={texto}
        onChangeText={setTexto}
        style={styles.input}
      />
      <View style={styles.botoes}>
        <Button title="Cancelar" onPress={() => navigation.goBack()} color="gray" />
        <Button title="Salvar" onPress={salvar} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
    marginBottom: 30,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
