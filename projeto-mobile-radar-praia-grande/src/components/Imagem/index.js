import { View, Image } from 'react-native';
import { styles } from './style';

function Imagem({ uri }) {
  return (
    <View>
      <Image
        source={{ uri }}
        style={styles.imagem} />
    </View>
  );
}

export default Imagem;