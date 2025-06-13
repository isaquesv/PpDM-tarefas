import { useEffect, useState } from 'react';
import { View, ScrollView, Text, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // IMPORTAR Picker nativo
import { styles } from './style';
import Campo from '../../components/Campo';
import Select from '../../components/Select'; // seu Select fixo para bairro
import Imagem from '../../components/Imagem';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

function EditarNoticia() {
  const [noticias, setNoticias] = useState([]);
  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function verificarLoginECarregar() {
      const usuario = await AsyncStorage.getItem('usuarioLogado');
      if (!usuario) {
        Alert.alert('Atenção', 'Você precisa estar logado para editar notícias.');
        navigation.navigate('Login');
        return;
      }

      try {
        const response = await api.get('/noticias');
        const lista = response.data;

        if (!lista || lista.length === 0) {
          Alert.alert('Aviso', 'Nenhuma notícia disponível para edição.');
        } else {
          setNoticias(lista);
        }
      } catch (error) {
        Alert.alert('Erro', 'Erro ao carregar notícias.');
      } finally {
        setLoading(false);
      }
    }

    verificarLoginECarregar();
  }, [navigation]);

  // Atualiza o estado da notícia selecionada pelo id do picker
  const handleSelecionarNoticia = (idSelecionado) => {
    const noticia = noticias.find((n) => n.id === idSelecionado);
    setNoticiaSelecionada(noticia || null);
  };

  const editarNoticia = async () => {
    if (
      !noticiaSelecionada?.titulo ||
      noticiaSelecionada?.bairro === 'Selecione o bairro atrelado à notícia' ||
      !noticiaSelecionada?.descricao
    ) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const noticiaAtualizada = {
        titulo: noticiaSelecionada.titulo,
        bairro: noticiaSelecionada.bairro,
        descricao: noticiaSelecionada.descricao,
        urlImagem: noticiaSelecionada.urlImagem,
      };

      await api.put(`/noticias/${noticiaSelecionada.id}`, noticiaAtualizada);

      Alert.alert('Sucesso', 'Notícia editada com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao editar notícia. Tente novamente.');
    }
  };

  // Adicione esta função abaixo da função editarNoticia
const excluirNoticia = async () => {
  Alert.alert(
    'Confirmação',
    'Tem certeza que deseja excluir esta notícia?',
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            await api.delete(`/noticias/${noticiaSelecionada.id}`);
            Alert.alert('Sucesso', 'Notícia excluída com sucesso!');
            setNoticiaSelecionada(null);

            // Atualiza lista de notícias
            const response = await api.get('/noticias');
            setNoticias(response.data);
          } catch (error) {
            Alert.alert('Erro', 'Falha ao excluir notícia.');
          }
        },
      },
    ]
  );
};


  if (loading) {
    return (
      <Fundo>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text>Carregando notícias...</Text>
        </View>
      </Fundo>
    );
  }

  return (
    <Fundo>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.boxContainer}>
          <Text style={styles.titulo}>Editar notícia</Text>

          {/* Picker nativo para escolher notícia */}
          <Picker
            selectedValue={noticiaSelecionada?.id || ''}
            onValueChange={handleSelecionarNoticia}
            style={{ marginBottom: 20 }}
          >
            <Picker.Item label="Selecione a notícia para editar" value="" />
            {noticias.map((n) => (
              <Picker.Item key={n.id} label={n.titulo} value={n.id} />
            ))}
          </Picker>

          {noticiaSelecionada && (
            <>
              <Campo
                value={noticiaSelecionada.titulo}
                onChangeText={(text) =>
                  setNoticiaSelecionada({ ...noticiaSelecionada, titulo: text })
                }
                placeholder="Digite o título da notícia"
              />

              {/* Seu Select fixo para o bairro */}
              <Select
                opcao1="Selecione o bairro atrelado à notícia"
                opcao2="Boqueirão"
                opcao3="Canto do Forte"
                opcao4="Guilhermina"
                selectedValue={noticiaSelecionada.bairro}
                onChange={(bairro) =>
                  setNoticiaSelecionada({ ...noticiaSelecionada, bairro })
                }
              />

              <Campo
                value={noticiaSelecionada.descricao}
                onChangeText={(text) =>
                  setNoticiaSelecionada({ ...noticiaSelecionada, descricao: text })
                }
                placeholder="Digite a descrição da notícia"
              />

              <Text style={styles.label}>Adicione uma imagem à notícia</Text>
              <Imagem uri={noticiaSelecionada.urlImagem} />

              <Botao texto="Confirmar" funcao={editarNoticia} />
              <Botao texto="Excluir" funcao={excluirNoticia} cor="#FF3B30" />

            </>
          )}
        </ScrollView>
      </View>
    </Fundo>
  );
}

export default EditarNoticia;
