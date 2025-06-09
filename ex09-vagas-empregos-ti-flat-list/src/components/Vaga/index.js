// Vaga.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const Vaga = ({ data }) => {
  return (
    <View style={styles.vaga}>
      <Text style={styles.titulo}>{data.titulo}</Text>
      <Text style={styles.salario}>Salário: {data.salario}</Text>
      <Text style={styles.descricao}>Descrição: {data.descricao}</Text>
      <Text style={styles.contato}>Contato: {data.contato}</Text>
    </View>
  );
};

export default Vaga;