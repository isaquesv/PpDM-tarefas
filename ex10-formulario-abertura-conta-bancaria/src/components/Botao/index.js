import { View, Pressable, Text } from 'react-native';
import {styles} from './style';

function Botao(props){
  let funcao = props.funcao;
  let texto = props.texto;
  
  return(
    <View>
      <Pressable style={styles.botao} onPress={funcao}>
        <Text style={styles.textoBotao}>{texto}</Text>
      </Pressable>
    </View>
  )
}

export default Botao;