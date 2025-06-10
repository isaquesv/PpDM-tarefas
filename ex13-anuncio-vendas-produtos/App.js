// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Anuncio from './components/Anuncio';
import AnuncioInfo from './components/AnuncioInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anúncios" component={Anuncio} />
        <Stack.Screen name="Detalhes" component={AnuncioInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
