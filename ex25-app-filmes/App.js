// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Filmes from './src/pages/Filmes';
import Sinopse from './src/pages/Sinopse';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filmes">
        <Stack.Screen
          name="Filmes"
          component={Filmes}
          options={{ title: 'Filmes' }}
        />
        <Stack.Screen
          name="Sinopse"
          component={Sinopse}
          options={{ title: 'Sinopse do Filme' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
