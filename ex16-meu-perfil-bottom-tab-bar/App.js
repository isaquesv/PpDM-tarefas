// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Experiencia from './src/pages/Experiencia';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Experiencia" component={Experiencia} />
        <Tab.Screen name="Formacao" component={Formacao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
