import { View } from 'react-native';

import Titulo from './src/Titulo/index';
import Botoes from './src/Botoes/index';

function ContadorPessoas() {
  return(
     <View style={{margin: 'auto'}}>
        <Titulo />
        <Botoes />
      </View>
  )
}

export default ContadorPessoas;