import { View, TextInput } from 'react-native';
import { styles } from './style';

function Campo({ value, onChangeText, placeholder, style, secureTextEntry }) {
  return (
    <View>
      <TextInput
        style={[styles.campo, style]} // Aplica estilo padrão + sobrescreve com externo
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888"
      />
    </View>
  );
}

export default Campo;
