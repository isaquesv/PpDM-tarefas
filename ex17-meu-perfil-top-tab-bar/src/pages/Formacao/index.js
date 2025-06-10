// src/pages/Formacao/Formacao.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text>Curso: Ciência da Computação</Text>
      <Text>Universidade: USP</Text>
      <Text>Ano de conclusão: 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:20 },
  title: { fontSize:20, fontWeight:'bold', marginBottom:10 }
});
