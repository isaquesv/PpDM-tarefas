import { View, Text } from 'react-native'

import { styles } from './style'

function Titulo(props){
  let titulo = props.titulo;

  return(
    <View>
      <Text style={styles.titulo}>
        {titulo}
      </Text>
    </View>
  )
}

export default Titulo