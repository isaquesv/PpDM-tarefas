// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import BitCoin from './src/pages/BitCoin';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#b3b3b3',
          tabBarIndicatorStyle: { backgroundColor: 'white' },
          tabBarStyle: { backgroundColor: 'green' },
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="Dólar" component={Dolar} />
        <Tab.Screen name="Euro" component={Euro} />
        <Tab.Screen name="BitCoin" component={BitCoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
