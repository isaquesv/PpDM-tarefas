import { View, Text } from 'react-native';
import { styles } from './style'

function Titulo() {
  return (
    <View>
      <Text style={styles.titulo}>
        Contador de Pessoas
      </Text>
    </View>
  )
}

export default Titulo;