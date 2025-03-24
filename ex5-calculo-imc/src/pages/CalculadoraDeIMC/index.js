import { useState } from 'react';
import { View, Text } from 'react-native'
import { styles } from './style'

import Titulo  from './../../components/Titulo'
import Imagem  from './../../components/Imagem'
import Campo  from './../../components/Campo'
import Botao  from './../../components/Botao'

function CalculadoraDeIMC() {
  const [resultadoImc, setResultadoImc] = useState('Classificação')
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState()

  function calcularImc(){
    if (peso == "" || altura == "") {
      setResultadoImc("Preencha os 2 campos.")
      return
    } else {
      if (isNaN(peso) || isNaN(altura)) {
        setResultadoImc("Por favor, insira apenas números válidos.")
        return
      } else {
        const imc = peso / (altura * altura);

        if (imc < 18.5) {
          setResultadoImc("Abaixo do peso");
        } else if (imc >= 18.5 && imc <= 24.9) {
          setResultadoImc("Peso normal");
        } else if (imc >= 25 && imc <= 29.9) {
          setResultadoImc("Sobrepeso");
        } else if (imc >= 30 && imc <= 34.9) {
          setResultadoImc("Obesidade grau I");
        } else if (imc >= 35 && imc <= 39.9) {
          setResultadoImc("Obesidade grau II");
        } else {
          setResultadoImc("Obesidade grau III ou Mórbida");
        }
      }  
    }
  }

  return (
    <View style={styles.container}>
      <Titulo />
      <Imagem />
      <Campo
        placeholder = 'Digite seu peso'
        funcao = {setPeso}
      />
      <Campo
        placeholder = 'Digite sua altura'
        funcao = {setAltura}
      />
      <Botao
        funcao = {calcularImc}
      />
      
      <Text style={styles.textoResultado}>{resultadoImc}</Text>
    </View>
  )
}

export default CalculadoraDeIMC