import { View, Image } from 'react-native';
import {styles} from './style'
import myImage from '../../assets/images/eu.jpg';

function Imagem(){  
  return(
    <View>
      <Image source={myImage} style={[styles.altura, styles.largura, styles.espacamentoSuperior, styles.espacamentoInferior, styles.espacamentoEsquerda, styles.espacamentoDireita, styles.borda]} />
    </View>
  )
}

export default Imagem;