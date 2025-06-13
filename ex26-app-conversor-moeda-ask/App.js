import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conversor from './src/pages/Conversor';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Conversor" 
          component={Conversor} 
          options={{ title: 'Conversor de Moedas' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
