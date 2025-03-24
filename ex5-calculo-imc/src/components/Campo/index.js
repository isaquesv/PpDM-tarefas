import { View, TextInput } from 'react-native'

import { styles } from './style'

function Campo(props){
  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.funcao}
      />
    </View>
  )
}

export default Campo