import { View, Text } from 'react-native';
import {viewStyle, textStyle} from './style'

function Texto(props){  
  let titulo = props.titulo;
  let texto1 = props.texto1;
  let texto2 = props.texto2;
  let texto3 = props.texto3;

  return(
    <View style={viewStyle.espacamentoEsquerda}>
      <Text style={[textStyle.tamanhoFonte, textStyle.espessuraFonte]}>{titulo}</Text>
      <Text>{texto1}</Text>
      <Text>{texto2}</Text>
      <Text style={textStyle.espacamentoInferior}>{texto3}</Text>
    </View>
  )
}

export default Texto;