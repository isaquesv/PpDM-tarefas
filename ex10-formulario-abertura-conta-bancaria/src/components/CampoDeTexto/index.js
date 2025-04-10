import { View, TextInput } from 'react-native';

import { styles } from './style';

function CampoDeTexto({ value, onChangeText, placeholder }){
  return(
    <View>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  )
}

export default CampoDeTexto;