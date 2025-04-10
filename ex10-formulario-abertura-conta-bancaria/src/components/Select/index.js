import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';

function Select({ opcao1, opcao2, opcao3, onChange }) {
  const [selected, setSelected] = useState(opcao1);

  const handleChange = (itemValue) => {
    setSelected(itemValue);
    onChange(itemValue);
  };

  return (
    <View>
      <Picker
        style={styles.select}
        selectedValue={selected}
        onValueChange={handleChange}
      >
        <Picker.Item key={1} value={opcao1} label={opcao1} />
        <Picker.Item key={2} value={opcao2} label={opcao2} />
        <Picker.Item key={3} value={opcao3} label={opcao3} />
      </Picker>
    </View>
  );
}

export default Select;
