import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const vagas = [
  {
    id: '1',
    titulo: 'Desenvolvedor Backend',
    salario: '3000,00',
    descricao: 'Desenvolvimento de APIs REST',
    contato: 'backend@empresa.com',
  },
  {
    id: '2',
    titulo: 'Engenheiro de Dados',
    salario: '3000,00',
    descricao: 'Pipeline de dados e análise',
    contato: 'dados@empresa.com',
  },
  {
    id: '3',
    titulo: 'Desenvolvedor Mobile',
    salario: '3500,00',
    descricao: 'Desenvolvimento de apps com React Native',
    contato: 'mobile@empresa.com',
  },
];

export default function Vagas({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.vaga}>{item.titulo}</Text>
      <Button
        title="Saiba mais"
        onPress={() =>
          navigation.navigate('Detalhes', {
            titulo: item.titulo,
            salario: item.salario,
            descricao: item.descricao,
            contato: item.contato,
          })
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  vaga: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },
});
