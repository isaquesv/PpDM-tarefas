import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AdicionarItem({ navigation }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  async function salvar() {
    if (!nome.trim() || !quantidade.trim()) return;
    const dados = await AsyncStorage.getItem('lista');
    const lista = dados ? JSON.parse(dados) : [];
    lista.push({ nome: nome.trim(), quantidade: quantidade.trim() });
    await AsyncStorage.setItem('lista', JSON.stringify(lista));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
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
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
