import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './style'
import Botao from '../../components/Botao';


function CadastrarNoticia() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (nome && email && senha) {
      alert('Cadastro realizado com sucesso!');
      // Aqui você pode enviar os dados para um backend futuramente
      setNome('');
      setEmail('');
      setSenha('');
    } else {
      alert('Preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar-se</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />

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

      <Botao texto="Cadastrar" funcao={handleCadastro} />
    </View>
  );
}

export default CadastrarNoticia;
