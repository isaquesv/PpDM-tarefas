// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConsultaCep from './src/pages/ConsultaCep';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Consulta de Cep" component={ConsultaCep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
