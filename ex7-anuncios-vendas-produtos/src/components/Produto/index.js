import { View, Text } from 'react-native';
import { styles } from './style';
import Imagem from './../../components/Imagem';

function Produto(props){  
  let urlImagemProduto = props.urlImagemProduto;
  let titulo = props.titulo;
  let preco = props.preco;
  let descricao = props.descricao;

  return (
    <View style={styles.produto}>
      <Imagem uri={urlImagemProduto} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.preco}>{preco}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

export default Produto;