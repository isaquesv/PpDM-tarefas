
import { View, Image } from 'react-native'

import { styles } from './style'

function Imagem(){
  return(
    <View>
      <Image
        source={{uri: 'https://sm.ign.com/t/ign_br/screenshot/default/og_yu46.1200.jpg'}}
        style={styles.imagem}
      />
    </View>
  )
}

export default Imagem