import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './style';

import Navbar from '../../components/Navbar';
import Campo from '../../components/Campo';
import Select from '../../components/Select';
import Imagem from '../../components/Imagem';
import Botao from '../../components/Botao';

function CadastrarNoticia() {
  const [titulo, setTitulo] = useState('');
  const [bairro, setBairro] = useState('Bairros');
  const [descricao, setDescricao] = useState('');
  const autor = 'Caio Lima';

  function cadastrarNoticia() {
    alert("Notícia cadastrada com sucesso!");
    alert("Título: " + titulo);
    alert("Bairro: " + bairro);
    alert("Descricao: " + descricao);
    alert("Autor: " + autor);
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Text style={styles.titulo}>Cadastrar notícia</Text>

        <Text style={styles.label}>Digite o título da notícia</Text>
        <Campo
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Digite aqui.." />
        
        <Text style={{marginTop: 16, marginHorizontal: 10, marginBottom: 6}}>Selecione o bairro relacionado à notícia</Text>
        <Select
          opcao1="Bairros"
          opcao2="Boqueirão"
          opcao3="Canto do Forte"
          opcao4="Guilhermina"
          onChange={setBairro} />
        
        <Text style={styles.label}>Digite a descrição da notícia</Text>
        <Campo
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Digite aqui.." />
        
        <Text style={{marginTop: 16, marginHorizontal: 10, marginBottom: 6}}>Adicione uma imagem à notícia</Text>
        <Imagem uri={"https://st4.depositphotos.com/8511412/20420/v/450/depositphotos_204201860-stock-illustration-add-photo-icon-vector-image.jpg"} />
        
        <Botao
          texto="Confirmar"
          funcao={cadastrarNoticia} />
      </ScrollView>
    </View>
  )
}

export default CadastrarNoticia