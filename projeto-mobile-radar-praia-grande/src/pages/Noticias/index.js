import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Noticia from '../../components/Noticia';
import Select from '../../components/Select';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';
import { fetchNoticias } from '../../services/noticiasAPI'; // Função da API real

const ContainerNoticias = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [filtroClassificacao, setFiltroClassificacao] = useState('Recentes');
  const [filtroBairro, setFiltroBairro] = useState('');
  const navigation = useNavigation();

  const carregarNoticias = async () => {
    setLoading(true);
    setErro(null);
    try {
      const dados = await fetchNoticias();
      setFeed(dados);
    } catch (e) {
      setErro('Erro ao carregar notícias.');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
  useCallback(() => {
    carregarNoticias();
  }, [])
);

  const filtrarEOrdenarNoticias = () => {
    let noticiasFiltradas = [...feed];

    if (filtroBairro && filtroBairro !== 'Bairros') {
      noticiasFiltradas = noticiasFiltradas.filter(
        (noticia) => noticia.bairro === filtroBairro
      );
    }

    switch (filtroClassificacao) {
      case 'Recentes':
        noticiasFiltradas.sort((a, b) => b.timestamp - a.timestamp);
        break;
      case 'Mais visualizados':
        noticiasFiltradas.sort((a, b) => b.visualizacoes - a.visualizacoes);
        break;
      case 'Mais curtidos':
        noticiasFiltradas.sort((a, b) => b.curtidas - a.curtidas);
        break;
      default:
        break;
    }

    return noticiasFiltradas;
  };

  if (loading) {
    return (
      <Fundo>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Carregando notícias...</Text>
        </View>
      </Fundo>
    );
  }

  if (erro) {
    return (
      <Fundo>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: 'red', marginBottom: 10 }}>{erro}</Text>
          <Botao texto="Tentar Novamente" funcao={carregarNoticias} />
        </View>
      </Fundo>
    );
  }

  return (
    <Fundo>
      <View style={styles.container}>
        <FlatList
          data={filtrarEOrdenarNoticias()}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={({ item }) => <Noticia {...item} />}
          ListHeaderComponent={
            <View style={styles.filtrosContainer}>
              <Text style={styles.label}>Filtros de pesquisa:</Text>

              <Select
                opcao1="Classificações"
                opcao2="Recentes"
                opcao3="Mais visualizados"
                opcao4="Mais curtidos"
                selectedValue={filtroClassificacao}
                onChange={setFiltroClassificacao}
              />

              <Select
                opcao1="Bairros"
                opcao2="Boqueirão"
                opcao3="Canto do Forte"
                opcao4="Guilhermina"
                selectedValue={filtroBairro}
                onChange={setFiltroBairro}
              />

              <Botao
                texto="Cadastrar Notícia"
                funcao={() => navigation.navigate('CadastrarNoticia')}
              />
            </View>
          }
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </Fundo>
  );
};

export default ContainerNoticias;
