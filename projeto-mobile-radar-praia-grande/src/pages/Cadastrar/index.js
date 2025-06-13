import React, { useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


import Campo from '../../components/Campo';
import Range from '../../components/Range';
import Toggle from '../../components/Toggle';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';

function Cadastrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState(1);
  const [escritor, setEscritor] = useState(false);
  const navigation = useNavigation();

  const handleCadastro = async () => {
    if (nome && email && senha) {
      try {
        const novoUsuario = { nome, email, senha, idade, escritor };
        
        const dadosExistentes = await AsyncStorage.getItem('usuarios');
        const usuarios = dadosExistentes ? JSON.parse(dadosExistentes) : [];

        const jaExiste = usuarios.some(user => user.email === email);
        if (jaExiste) {
          Alert.alert('Erro', 'Esse email já está cadastrado.');
          return;
        }

        usuarios.push(novoUsuario);
        await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));

        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setIdade(1);
        setEscritor(false);
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
        console.error(error);
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos.');
    }
  };

  return (
    <Fundo>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Text style={styles.titulo}>Cadastrar-se</Text>

          <Campo placeholder="Nome completo" value={nome} onChangeText={setNome} />
          <Campo placeholder="Email" value={email} onChangeText={setEmail} />
          <Campo placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

          <Text style={styles.label}>Qual a sua idade?</Text>
          <Range valorMinimo={1} valorMaximo={110} valor={idade} onChange={setIdade} />

          <Text style={styles.label}>Você é um escritor?</Text>
          <Toggle value={escritor} onChange={setEscritor} />

          <Botao texto="Cadastrar" funcao={handleCadastro} />
        </ScrollView>
      </View>
    </Fundo>
  );
}

export default Cadastrar;
