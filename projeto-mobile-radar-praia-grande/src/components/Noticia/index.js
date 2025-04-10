import { View, Text } from 'react-native';
import { styles } from './style';
import Imagem from './../Imagem';

function Noticia(props){  
  let titulo = props.titulo;
  let urlImagem = props.urlImagem;
  let bairro = props.bairro;
  let data = props.data;
  let autor = props.autor;

  return (
    <View style={styles.noticia}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Imagem uri={urlImagem} />
      <Text style={styles.bairro}>Bairro: {bairro}</Text>
      <Text style={styles.data}>Postado há {data}</Text>
      <Text style={{margin: 10, marginTop: 0, marginBottom: 20}}>
        Autor: <Text style={styles.autor}>{autor}</Text>
      </Text>
    </View>
  );
}

export default Noticia;