// src/pages/BitCoin/BitCoin.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, Alert } from 'react-native';

export default function BitCoin() {
  const [real, setReal] = useState('');
  const [resultado, setResultado] = useState(null);

  const taxaBitcoin = 0.0000045;

  function converter() {
    const valor = parseFloat(real.replace(',', '.'));
    if (isNaN(valor)) {
      Alert.alert('Erro', 'Digite um número válido');
      setResultado(null);
      return;
    }
    const convertido = valor * taxaBitcoin;
    setResultado(convertido.toFixed(8));
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em Real"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={real}
        onChangeText={setReal}
      />
      <TouchableOpacity style={styles.botao} onPress={converter}>
        <Text style={styles.textoBotao}>Converter</Text>
      </TouchableOpacity>
      {resultado !== null && (
        <Text style={styles.resultado}>Valor em Bitcoin: ₿{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: 'red', marginBottom: 20, textAlign: 'center' },
  input: {
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
    color: '#000',
  },
  botao: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
