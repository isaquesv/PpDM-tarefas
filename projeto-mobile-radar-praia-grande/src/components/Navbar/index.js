import { View, Text } from 'react-native'
import { styles } from './style'

function Navbar(){
  return(
    <View style={styles.navbar}>
      <Text style={styles.titulo}>
        Radar Praia Grande
      </Text>
    </View>
  )
}

export default Navbar