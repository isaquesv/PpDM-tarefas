import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tarefas from './src/pages/Tarefas';
import AdicionarTarefa from './src/pages/AdicionarTarefa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefas">
        <Stack.Screen name="Tarefas" component={Tarefas} />
        <Stack.Screen name="AdicionarTarefa" component={AdicionarTarefa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
