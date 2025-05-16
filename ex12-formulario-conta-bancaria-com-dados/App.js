// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Conta from './src/pages/Conta';
import Dados from './src/pages/Dados';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="Dados" component={Dados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
