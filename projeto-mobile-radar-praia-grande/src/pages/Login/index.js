import React, { useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


import Campo from '../../components/Campo';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const validarLogin = async () => {
    if (email && senha) {
      try {
        const dados = await AsyncStorage.getItem('usuarios');
        const usuarios = dados ? JSON.parse(dados) : [];

        const usuarioValido = usuarios.find(
          (user) => user.email === email && user.senha === senha
        );

        if (usuarioValido) {
          await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
          Alert.alert('Sucesso', `Bem-vindo(a), ${usuarioValido.nome}!`);
          setEmail('');
          setSenha('');
          navigation.navigate('Noticias');
        }
        else {
          Alert.alert('Erro', 'Email ou senha incorretos.');
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível realizar o login.');
        console.error(error);
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos.');
    }
  };

  return (
    <Fundo>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.boxContainer}>
          <Text style={styles.titulo}>Login</Text>

          <Campo
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <Campo
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <Botao texto="Entrar" funcao={validarLogin} />
        </ScrollView>
      </View>
    </Fundo>
  );
}

export default Login;
