import { View } from 'react-native'
import { styles } from './style'

import Titulo  from './../../components/Titulo'
import ContainerProdutos  from './../../components/ContainerProdutos'

function AnunciosVendasProdutos() {
  return (
    <View style={styles.container}>
      <Titulo />
      <ContainerProdutos />
    </View>
  )
}

export default AnunciosVendasProdutos