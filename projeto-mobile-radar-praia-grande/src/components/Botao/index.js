import { View, Pressable, Text } from 'react-native';
import { styles } from './style';

function Botao(props) {
  const { funcao, texto, cor } = props;

  return (
    <View>
      <Pressable
        style={[styles.botao, { backgroundColor: cor || styles.botao.backgroundColor }]}
        onPress={funcao}
      >
        <Text style={styles.textoBotao}>{texto}</Text>
      </Pressable>
    </View>
  );
}

export default Botao;
