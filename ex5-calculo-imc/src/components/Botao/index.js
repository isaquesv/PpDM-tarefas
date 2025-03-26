import { View, Pressable, Text } from 'react-native'

import {styles} from './style'

function Botao(props){
  return(
    <View>
      <Pressable style={styles.botao} onPress={props.funcao}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>
    </View>
  )
}

export default Botao