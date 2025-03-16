import { useState } from 'react';
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { styles } from './style'

function ComparadorAlcoolOuGasolina() {
  const imagem = 'https://www.terra.com.br/economia/infograficos/alcool-x-gasolina/img/gasolina.gif';
  const [precoAlcool, setPrecoAlcool] = useState(0)
  const [precoGasolina, setPrecoGasolina] = useState(0)
  const [resultadoCalculoVantagem, setResultadoCalculoVantagem] = useState("Resultado")

  function calcularVantagem() {
    if (precoAlcool == "" || precoGasolina == "") {
      setResultadoCalculoVantagem("Preencha os 2 campos.")
    } else {
      if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
        setResultadoCalculoVantagem("Por favor, insira apenas números válidos.") 
      } else {
         if (precoAlcool / precoGasolina < 0.7) {
          setResultadoCalculoVantagem("O álcool é melhor")
        } else {
          setResultadoCalculoVantagem("A gasolina é melhor")
        }
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <Image source={{ uri: imagem }} style={styles.imagem} />

      <TextInput style={styles.campoDeTexto} placeholder={"Preço do Álcool"} onChangeText={setPrecoAlcool}/>

      <TextInput style={styles.campoDeTexto} placeholder={"Preço do Gasolina"} onChangeText={setPrecoGasolina}/>

      <Pressable style={styles.botao} onPress={calcularVantagem}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>

      <Text style={styles.textoResultado}>{resultadoCalculoVantagem}</Text>
    </View>
  )
}

export default ComparadorAlcoolOuGasolina