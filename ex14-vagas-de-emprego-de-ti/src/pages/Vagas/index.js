import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native';

export default function Vagas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vagas</Text>

      <View style={styles.card}>
        <Image source={require('../../../assets/backend.png')} style={styles.image} />
        <Text style={styles.vaga}>Desenvolvedor Backend</Text>
        <Button
          title="Saiba mais"
          onPress={() =>
            navigation.navigate('Detalhes', {
              titulo: 'Desenvolvedor Backend',
              salario: '3000,00',
              descricao: 'Desenvolvimento de APIs REST',
              contato: 'backend@empresa.com',
            })
          }
        />
      </View>

      <View style={styles.card}>
        <Image source={require('../../../assets/engenheiro-de-dados.png')} style={styles.image} />
        <Text style={styles.vaga}>Engenheiro de Dados</Text>
        <Button
          title="Saiba mais"
          onPress={() =>
            navigation.navigate('Detalhes', {
              titulo: 'Engenheiro de Dados',
              salario: '3000,00',
              descricao: 'Pipeline de dados e análise',
              contato: 'dados@empresa.com',
            })
          }
        />
      </View>

      <View style={styles.card}>
        <Image source={require('../../../assets/desenvolvedor-mobile.png')} style={styles.image} />
        <Text style={styles.vaga}>Desenvolvedor Mobile</Text>
        <Button
          title="Saiba mais"
          onPress={() =>
            navigation.navigate('Detalhes', {
              titulo: 'Desenvolvedor Mobile',
              salario: '3500,00',
              descricao: 'Desenvolvimento de apps com React Native',
              contato: 'mobile@empresa.com',
            })
          }
        />
      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'red',
    marginBottom: 20,
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
  image: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
