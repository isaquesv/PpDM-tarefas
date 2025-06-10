import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from './src/pages/Lista';
import AdicionarItem from './src/pages/AdicionarProduto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="AdicionarItem" component={AdicionarItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
