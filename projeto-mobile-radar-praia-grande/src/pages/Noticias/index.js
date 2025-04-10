import { useState } from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import { styles } from './style';

import Noticia from '../../components/Noticia';
import Select from '../../components/Select';
import Botao from '../../components/Botao';

const ContainerNoticias = ({ navegar }) => {
  const initial_feed = [
    {
      id: '1',
      titulo: 'Novo Parque Ecológico é Inaugurado no Bairro Quietude',
      urlImagem: 'https://s2-g1.glbimg.com/C94RRLT8_rrh-ZSVkinoQpHQSYM=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/8/L/GGkgQEStWyaQUewazang/frame-00-00-11.269.jpg',
      bairro: 'Quietude',
      data: '6 horas',
      autor: 'Amanda Freitas',
    },
    {
      id: '2',
      titulo: 'Praia Grande Receberá Festival de Música na Orla do Canto do Forte',
      urlImagem: 'https://cdn.ibahia.com/img/inline/300000/500x400/Festival-Canto-pela-Paz-reune-centenas-de-pessoas-0030968700202311252014-7.webp?fallback=https%3A%2F%2Fcdn.ibahia.com%2Fimg%2Finline%2F300000%2FFestival-Canto-pela-Paz-reune-centenas-de-pessoas-0030968700202311252014.jpg%3Fxid%3D1445907&xid=1445907',
      bairro: 'Canto do Forte',
      data: '8 horas',
      autor: 'Caio Lima',
    },
    {
      id: '3',
      titulo: 'Feira de Artesanato Ganha Espaço Permanente no Bairro Boqueirão',
      urlImagem: 'https://niteroi.rj.gov.br/wp-content/uploads/2021/12/Feira-da-Orla-de-Sao-Francisco-1-1.jpeg',
      bairro: 'Boqueirão',
      data: '23 horas',
      autor: 'Letícia Martins',
    },
  ];

  const [feed, setFeed] = useState(initial_feed);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Filtros de pesquisa:</Text>
        <Select
          opcao1="Classificações"
          opcao2="Recentes"
          opcao3="Mais visualizados"
          opcao4="Mais curtidos"
          onChange={() => {}}
        />
        <Select
          opcao1="Bairros"
          opcao2="Boqueirão"
          opcao3="Canto do Forte"
          opcao4="Guilhermina"
          onChange={() => {}}
        />
        
        <FlatList
          data={feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Noticia {...item} />}
        />

        <Botao texto="Cadastrar Notícia" funcao={() => navegar('CadastrarNoticia')} />
      </ScrollView>
    </View>
  );
};

export default ContainerNoticias;