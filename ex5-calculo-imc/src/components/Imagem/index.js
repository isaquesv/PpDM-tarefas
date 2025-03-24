import { View, Image } from 'react-native'

import { styles } from './style'

function Imagem(){
  return(
    <View>
      <Image
        source={{uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk'}}
        style={styles.imagem}
      />
    </View>
  )
}

export default Imagem