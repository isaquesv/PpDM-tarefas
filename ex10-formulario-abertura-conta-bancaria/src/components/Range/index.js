import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './style';

function Range({ valorMinimo, valorMaximo, onChange }) {
  const [valor, setValor] = React.useState(valorMinimo);

  const handleChange = (novoValor) => {
    setValor(novoValor);
    onChange(novoValor);
  };

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={valorMinimo}
        maximumValue={valorMaximo}
        value={valor}
        onValueChange={handleChange}
        step={1}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="green"
        thumbTintColor="orange"
      />
      <Text style={styles.text}>R$ {valor.toFixed(2)}</Text>
    </View>
  );
}

export default Range;
