import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
  const { titulo, salario, descricao, contato } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text>Salário: R$ {salario}</Text>
      <Text>Descrição: {descricao}</Text>
      <Text>Contato: {contato}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    color: 'blue',
    marginBottom: 10,
  },
});