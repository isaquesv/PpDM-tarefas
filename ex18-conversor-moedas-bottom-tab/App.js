// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import BitCoin from './src/pages/BitCoin';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#b3b3b3',
          tabBarStyle: { backgroundColor: 'green' },
        }}
      >
        <Tab.Screen name="Dólar" component={Dolar} />
        <Tab.Screen name="Euro" component={Euro} />
        <Tab.Screen name="BitCoin" component={BitCoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
