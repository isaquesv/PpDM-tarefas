  // src/pages/Pessoal/Pessoal.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pessoal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Pessoais</Text>
      <Text>Nome: João da Silva</Text>
      <Text>Idade: 25 anos</Text>
      <Text>Email: joao@email.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:20 },
  title: { fontSize:20, fontWeight:'bold', marginBottom:10 }
});
