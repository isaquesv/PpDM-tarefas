// components/Anuncio/index.js
import React from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';

const produtos = [
  {
    id: 1,
    titulo: 'Notebook Dell',
    imagem: require('../../assets/notebook-dell.png'),
    descricao: 'Notebook Dell i7, 16GB RAM, 512GB SSD.',
  },
  {
    id: 2,
    titulo: 'Celular Samsung',
    imagem: require('../../assets/cell-samsung.png'),
    descricao: 'Samsung Galaxy S21, 128GB, câmera tripla.',
  },
  {
    id: 3,
    titulo: 'Smart TV LG',
    imagem: require('../../assets/tv-lg.png'),
    descricao: 'TV 50", 4K UHD, webOS.',
  },
];

export default function Anuncio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <ScrollView horizontal>
        {produtos.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.nome}>{item.titulo}</Text>
            <Button
              title="Ver detalhes"
              onPress={() => navigation.navigate('Detalhes', { produto: item })}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    width: 200,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  imagem: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    marginBottom: 5,
  },
});
