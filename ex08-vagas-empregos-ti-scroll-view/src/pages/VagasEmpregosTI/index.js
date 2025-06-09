import { View } from 'react-native'
import { styles } from './style'

import Titulo  from './../../components/Titulo'
import ContainerVagas  from './../../components/ContainerVagas'

function VagasEmpregosTI() {
  return (
    <View style={styles.container}>
      <Titulo />
      <ContainerVagas />
    </View>
  )
}

export default VagasEmpregosTI