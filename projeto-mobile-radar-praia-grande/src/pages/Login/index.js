import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {styles} from './style'
import Botao from '../../components/Botao';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode validar ou simular login
    if (email === 'admin@email.com' && senha === '123') {
      alert('Login bem-sucedido!');
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Botao texto="Entrar" funcao={handleLogin} />
    </View>
  );
}

export default Login;
