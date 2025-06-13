import { useEffect, useState } from 'react';
import { View, ScrollView, Text, Alert, ActivityIndicator } from 'react-native';
import { styles } from './style';
import Campo from '../../components/Campo';
import Select from '../../components/Select';
import Imagem from '../../components/Imagem';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'; // axios configurado para API real

function CadastrarNoticia() {
  const [titulo, setTitulo] = useState('');
  const [bairro, setBairro] = useState('Selecione o bairro atrelado à notícia');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(false);
  const [autor, setAutor] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function verificarLogin() {
      const usuario = await AsyncStorage.getItem('usuarioLogado');
      if (!usuario) {
        Alert.alert('Atenção', 'Você precisa estar logado para cadastrar notícias.');
        navigation.navigate('Login');
      } else {
        const user = JSON.parse(usuario);
        setAutor(user.nome); // Define o nome do autor
      }
    }
    verificarLogin();
  }, [navigation]);

  async function cadastrarNoticiaHandler() {
    if (!titulo || bairro === 'Selecione o bairro atrelado à notícia' || !descricao) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);

      const novaNoticia = {
        titulo,
        bairro,
        descricao,
        autor: autor || 'Usuário logado', // Usa o nome real, fallback de segurança
        timestamp: Date.now(),
        visualizacoes: 0,
        curtidas: 0
      };

      await api.post('/noticias', novaNoticia);

      Alert.alert('Sucesso', 'Notícia cadastrada com sucesso!');
      setTitulo('');
      setBairro('Selecione o bairro atrelado à notícia');
      setDescricao('');
      navigation.navigate('Noticias');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao cadastrar notícia. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Fundo>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text>Cadastrando notícia...</Text>
        </View>
      </Fundo>
    );
  }

  return (
    <Fundo>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>Cadastrar notícia</Text>

          <Campo
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Digite o título da notícia"
            style={styles.inputBranco}
          />

          <Select
            opcao1="Selecione o bairro atrelado à notícia"
            opcao2="Boqueirão"
            opcao3="Canto do Forte"
            opcao4="Guilhermina"
            selectedValue={bairro}
            onChange={setBairro}
            style={styles.inputBranco}
          />

          <Campo
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Digite a descrição da notícia"
            style={styles.inputBranco}
          />

          <Text style={styles.label}>Adicione uma imagem à notícia</Text>
          <Imagem uri="https://st4.depositphotos.com/8511412/20420/v/450/depositphotos_204201860-stock-illustration-add-photo-icon-vector-image.jpg" />

          <Botao texto="Confirmar" funcao={cadastrarNoticiaHandler} />
        </ScrollView>
      </View>
    </Fundo>
  );
}

export default CadastrarNoticia;
