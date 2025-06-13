// src/pages/EditarPerfil/index.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

import Imagem from '../../components/Imagem';
import Campo from '../../components/Campo';
import Range from '../../components/Range';
import Toggle from '../../components/Toggle';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';

function EditarPerfil() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [biografia, setBiografia] = useState('');
  const [idade, setIdade] = useState(1);
  const [escritor, setEscritor] = useState(false);

  useEffect(() => {
    const carregarDados = async () => {
      const dados = await AsyncStorage.getItem('usuarioLogado');
      if (!dados) {
        Alert.alert('Aviso', 'Você precisa estar logado.', [
          { text: 'OK', onPress: () => navigation.replace('Login') }
        ]);
        navigation.navigate('Login');
        return;
      }
      const usuario = JSON.parse(dados);
      setNome(usuario.nome || '');
      setEmail(usuario.email || '');
      setBiografia(usuario.biografia || '');
      const idadeConvertida = Number(usuario.idade);
      setIdade(isNaN(idadeConvertida) ? 1 : idadeConvertida);
      setEscritor(usuario.escritor || false);
    };

    carregarDados();
  }, []);

  const atualizarPerfil = async () => {
    try {
      const usuarioAtualizado = { nome, email, biografia, idade, escritor };
      await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtualizado));
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao atualizar perfil.');
    }
  };

  return (
    <Fundo>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.boxContainer}>
          <Text style={styles.titulo}>Editar perfil</Text>
         
          <Text style={styles.label}>Nome</Text>
          <Campo value={nome} onChangeText={setNome} placeholder="Nome completo" />

          <Text style={styles.label}>E-mail</Text>
          <Campo value={email} onChangeText={setEmail} placeholder="Email" />

          <Text style={styles.label}>Biografia</Text>
          <Campo value={biografia} onChangeText={setBiografia} placeholder="Sobre você" />

          <Text style={styles.label}>Idade:</Text>
          <Range valorMinimo={1} valorMaximo={110} valor={idade} onChange={setIdade} />

          <Text style={styles.label}>Escritor:</Text>
          <Toggle value={escritor} onChange={setEscritor} />

          <Botao texto="Atualizar informações" funcao={atualizarPerfil} />
        </ScrollView>
      </View>
    </Fundo>
  );
}

export default EditarPerfil;
