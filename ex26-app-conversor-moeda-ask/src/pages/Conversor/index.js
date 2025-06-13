import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../../services/api';

const moedas = ['BRL', 'USD', 'EUR', 'BTC'];

export default function Conversor() {
  const [valor, setValor] = useState('');
  const [de, setDe] = useState('BRL');
  const [para, setPara] = useState('USD');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    async function converter() {
      if (!valor || de === para) {
        setResultado('');
        return;
      }
      try {
        const response = await api.get(`${para}-${de}`);
        const taxa = parseFloat(response.data[`${para}${de}`].ask);
        const convertido = (parseFloat(valor) / taxa).toFixed(2);
        setResultado(`${convertido} ${para}`);
      } catch (error) {
        setResultado('Erro na conversão');
      }
    }
    converter();
  }, [valor, de, para]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>

      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Text style={styles.label}>De:</Text>
      <Picker selectedValue={de} onValueChange={(v) => setDe(v)}>
        {moedas.map((moeda) => (
          <Picker.Item label={moeda} value={moeda} key={moeda} />
        ))}
      </Picker>

      <Text style={styles.label}>Para:</Text>
      <Picker selectedValue={para} onValueChange={(v) => setPara(v)}>
        {moedas.map((moeda) => (
          <Picker.Item label={moeda} value={moeda} key={moeda} />
        ))}
      </Picker>

      <Text style={styles.resultado}>Valor convertido</Text>
      <Text style={styles.valorConvertido}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'blue',
  },
  valorConvertido: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});