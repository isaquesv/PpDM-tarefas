import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './style';

import Campo from '../../components/Campo';
import Select from '../../components/Select';
import Imagem from '../../components/Imagem';
import Botao from '../../components/Botao';

function EditarNoticia() {
  const [titulo, setTitulo] = useState('Praia Grande Receberá Festival de Música na Orla do Canto do Forte');
  const [bairro, setBairro] = useState('Canto do Forte');
  const [descricao, setDescricao] = useState('Prepare-se para dias de sol, som e vibração positiva! A cidade de Praia Grande vai se transformar no palco de um dos eventos mais aguardados do ano: o Festival Som na Orla. Com atrações nacionais e artistas locais, o evento promete agitar o Canto do Forte com ritmos que vão do pop ao samba, passando pelo reggae e MPB. Além dos shows, o público poderá curtir food trucks, feira de artesanato e atividades culturais à beira-mar. A entrada é gratuita e a energia? Garantida!');

  function editarNoticia() {
    if (titulo && bairro && descricao) {
      alert('Notícia editada com sucesso!');
    } else {
      alert('Preencha todos os campos.');
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Editar notícia</Text>

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
        <Imagem uri={"https://cdn.ibahia.com/img/inline/300000/500x400/Festival-Canto-pela-Paz-reune-centenas-de-pessoas-0030968700202311252014-7.webp?fallback=https%3A%2F%2Fcdn.ibahia.com%2Fimg%2Finline%2F300000%2FFestival-Canto-pela-Paz-reune-centenas-de-pessoas-0030968700202311252014.jpg%3Fxid%3D1445907&xid=1445907"} />
        
        <Botao
          texto="Confirmar"
          funcao={editarNoticia} />
      </ScrollView>
    </View>
  )
}

export default EditarNoticia