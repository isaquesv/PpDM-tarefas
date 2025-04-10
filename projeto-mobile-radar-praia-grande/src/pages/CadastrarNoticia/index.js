import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './style';

import Campo from '../../components/Campo';
import Select from '../../components/Select';
import Imagem from '../../components/Imagem';
import Botao from '../../components/Botao';

function CadastrarNoticia() {
  const [titulo, setTitulo] = useState('');
  const [bairro, setBairro] = useState('Selecione o bairro atrelado à notícia');
  const [descricao, setDescricao] = useState('');

  function cadastrarNoticia() {
    if (titulo && bairro && descricao) {
      alert('Notícia cadastrada com sucesso!');
      setTitulo('');
      setBairro('Selecione o bairro atrelado à notícia');
      setDescricao('');
    } else {
      alert('Preencha todos os campos.');
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Cadastrar notícia</Text>

        <Campo
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Digite o título da notícia" />
        
        <Select
          opcao1="Selecione o bairro atrelado à notícia"
          opcao2="Boqueirão"
          opcao3="Canto do Forte"
          opcao4="Guilhermina"
          selectedValue={bairro}
          onChange={setBairro} />
        
        <Campo
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Digite a descrição da notícia" />
        
        <Text style={styles.label}>Adicione uma imagem à notícia</Text>
        <Imagem uri={"https://st4.depositphotos.com/8511412/20420/v/450/depositphotos_204201860-stock-illustration-add-photo-icon-vector-image.jpg"} />
        
        <Botao
          texto="Confirmar"
          funcao={cadastrarNoticia} />
      </ScrollView>
    </View>
  )
}

export default CadastrarNoticia