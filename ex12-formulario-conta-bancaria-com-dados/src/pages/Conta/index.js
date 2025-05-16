// src/pages/Conta.js
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';



export default function Conta({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Ensino Médio');
  const [limite, setLimite] = useState(200);
  const [brasileiro, setBrasileiro] = useState(false);

  function confirmar() {
    navigation.navigate('Dados', {
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      brasileiro,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Idade:</Text>
      <TextInput style={styles.input} value={idade} onChangeText={setIdade} keyboardType="numeric" />

      <Text>Sexo:</Text>
      <Picker selectedValue={sexo} onValueChange={setSexo}>
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>

      <Text>Escolaridade:</Text>
      <Picker selectedValue={escolaridade} onValueChange={setEscolaridade}>
        <Picker.Item label="Ensino Fundamental" value="Ensino Fundamental" />
        <Picker.Item label="Ensino Médio" value="Ensino Médio" />
        <Picker.Item label="Ensino Superior" value="Ensino Superior" />
      </Picker>

      <Text>Limite: {limite.toFixed(0)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={1000}
        step={50}
        value={limite}
        onValueChange={setLimite}
      />

      <View style={styles.switchContainer}>
        <Text>Brasileiro:</Text>
        <Switch value={brasileiro} onValueChange={setBrasileiro} />
      </View>

      <Button title="Confirmar" onPress={confirmar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
