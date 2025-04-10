import React from 'react';
import { Switch } from 'react-native';

function Toggle({ value, onChange }) {
  return (
    <Switch value={value} onValueChange={onChange} />
  );
}

export default Toggle;