import { View, Text } from 'react-native'

import { styles } from './style'

function Titulo(){
  return(
    <View>
      <Text style={styles.titulo}>
        Cálculo do IMC
      </Text>
    </View>
  )
}

export default Titulo