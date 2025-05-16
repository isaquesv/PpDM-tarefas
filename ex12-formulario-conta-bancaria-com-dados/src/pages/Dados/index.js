// src/pages/Dados.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Dados({ route, navigation }) {
  const { nome, idade, sexo, escolaridade, limite, brasileiro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados informados:</Text>

      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Sexo: {sexo}</Text>
      <Text>Escolaridade: {escolaridade}</Text>
      <Text>Limite: {limite.toFixed(0)}</Text>
      <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
});
