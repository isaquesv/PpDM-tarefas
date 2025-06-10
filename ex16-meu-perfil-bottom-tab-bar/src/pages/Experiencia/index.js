// src/pages/Experiencia/Experiencia.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text>Empresa: ABC Ltda</Text>
      <Text>Cargo: Desenvolvedor Frontend</Text>
      <Text>Duração: 2019 - 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:20 },
  title: { fontSize:20, fontWeight:'bold', marginBottom:10 }
});
