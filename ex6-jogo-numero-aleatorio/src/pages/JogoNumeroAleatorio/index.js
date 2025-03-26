import { useState } from 'react';
import { View, Text } from 'react-native'
import { styles } from './style'

import Titulo  from './../../components/Titulo'
import Imagem  from './../../components/Imagem'
import Botao  from './../../components/Botao'

function JogoNumeroAleatorio() {
  const [numeroAleatorio, setnumeroAleatorio] = useState()

  function gerarNumeroAleatorio(){
     setnumeroAleatorio(Math.floor(Math.random() * 11))
  }

  return (
    <View style={styles.container}>
      <Titulo />
      <Imagem />
      <Botao
        funcao = {gerarNumeroAleatorio}
      />
      
      <Text style={{color: 'green', marginLeft: 'auto', marginRight: 'auto', fontSize: 18}}>Pense em um nº de 0 a 10!</Text>

      <Text style={styles.textoResultado}>{numeroAleatorio}</Text>
    </View>
  )
}

export default JogoNumeroAleatorio