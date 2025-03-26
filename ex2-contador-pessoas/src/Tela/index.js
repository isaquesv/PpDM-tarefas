import { View, Text } from 'react-native';
import { styles } from './style';

function Tela(props) {
  let contador = props.contador;

  return (
    <View style={styles.tela}>
      <Text style={styles.contador}>
        {contador}
      </Text>
    </View>
  )
}

export default Tela;