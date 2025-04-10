import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import {styles} from './style';
import Campo from '../../components/Campo';
import Botao from '../../components/Botao';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function validarLogin() {
    if (email && senha) {
      if (email === 'admin@email.com' && senha === '123') {
        alert('Login bem-sucedido!');
        setEmail('');
        setSenha('');
      } else {
        alert('Email ou senha incorretos.');
      }
    } else {
      alert('Preencha todos os campos.');
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
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
  );
}

export default Login;