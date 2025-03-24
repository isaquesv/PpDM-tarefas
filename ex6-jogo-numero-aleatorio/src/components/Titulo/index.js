
import { View, Text } from 'react-native'

import { styles } from './style'

function Titulo(){
  return(
    <View>
      <Text style={styles.titulo}>
        Jogo do Nº Aleatório
      </Text>
    </View>
  )
}

export default Titulo