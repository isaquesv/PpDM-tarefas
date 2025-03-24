import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native'
import { styles } from './style'

function MultiplicadorDeNumeros() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [resultadoMultiplicacao, setResultadoMultiplicacao] = useState("___")

  function calcularMultiplicacao() {
    if (n1 == "" || n2 == "") {
      setResultadoMultiplicacao("Preencha os 2 campos.")
    } else {
      if (isNaN(n1) || isNaN(n2)) {
        setResultadoMultiplicacao("Por favor, insira apenas números válidos.") 
      } else {
        setResultadoMultiplicacao(n1*n2) 
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>

      <TextInput style={styles.campoDeTexto} placeholder={"Digite o primeiro número"} onChangeText={setN1}/>

      <TextInput style={styles.campoDeTexto} placeholder={"Digite o segundo número"} onChangeText={setN2}/>

      <Pressable style={styles.botao} onPress={calcularMultiplicacao}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <Text style={styles.textoResultado}>Resultado: {resultadoMultiplicacao}</Text>
    </View>
  )
}

export default MultiplicadorDeNumeros