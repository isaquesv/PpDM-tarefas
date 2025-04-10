import { View, TextInput } from 'react-native';

import { styles } from './style';

function Campo({ value, onChangeText, placeholder }){
  return(
    <View>
      <TextInput
        style={styles.campo}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Campo;