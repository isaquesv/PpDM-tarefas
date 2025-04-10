import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './style';

function Range({ valorMinimo, valorMaximo, valor, onChange }) {
  const handleChange = (novoValor) => {
    onChange(novoValor);
  };

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={valorMinimo}
        maximumValue={valorMaximo}
        value={valor} // Agora é controlado por fora
        onValueChange={handleChange}
        step={1}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="green"
        thumbTintColor="orange"
      />
      <Text style={styles.text}>{valor}</Text>
    </View>
  );
}

export default Range;