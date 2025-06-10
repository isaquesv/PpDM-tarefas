// components/Conversor/index.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

export default function Conversor() {
  const [valor, setValor] = useState('');
  const [de, setDe] = useState('USD');
  const [para, setPara] = useState('BRL');
  const [resultado, setResultado] = useState('');

  const taxas = {
    USD: { BRL: 5.1, EUR: 0.92 },
    BRL: { USD: 0.2, EUR: 0.18 },
    EUR: { USD: 1.09, BRL: 5.6 },
  };

  const converter = () => {
    const v = parseFloat(valor);
    if (isNaN(v) || de === para) {
      setResultado('Verifique os valores.');
      return;
    }
    const taxa = taxas[de][para];
    const convertido = (v * taxa).toFixed(2);
    setResultado(`${valor} ${de} = ${convertido} ${para}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <Text style={styles.subtitle}>Dólar, Real e Euro</Text>

      <Text>Valor:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Text>De:</Text>
      <Picker selectedValue={de} onValueChange={setDe} style={styles.picker}>
        <Picker.Item label="Dólar" value="USD" />
        <Picker.Item label="Real" value="BRL" />
        <Picker.Item label="Euro" value="EUR" />
      </Picker>

      <Text>Para:</Text>
      <Picker selectedValue={para} onValueChange={setPara} style={styles.picker}>
        <Picker.Item label="Dólar" value="USD" />
        <Picker.Item label="Real" value="BRL" />
        <Picker.Item label="Euro" value="EUR" />
      </Picker>

      <View style={styles.button}>
        <Button title="Converter" onPress={converter} color="#0077cc" />
      </View>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginBottom: 10,
  },
  picker: {
    height: 40,
    marginBottom: 10,
  },
  button: {
    marginVertical: 10,
  },
  result: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});
