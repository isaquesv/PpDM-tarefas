import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'

function SobreNos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre Nós</Text>
      <Text style={styles.texto}>
        O Radar Praia Grande é um projeto dedicado a manter a população informada sobre notícias, eventos e serviços da cidade. 
        Nosso objetivo é criar um canal acessível, confiável e atualizado para todos os moradores e visitantes.
      </Text>
      <Text style={styles.texto}>
        Desenvolvido por pessoas apaixonadas pela cidade, com foco em tecnologia, comunicação e utilidade pública.
      </Text>
    </View>
  );
}

export default SobreNos;
