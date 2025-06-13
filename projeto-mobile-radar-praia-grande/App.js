// App.js
import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navbar from './src/components/Navbar';

import Noticias from './src/pages/Noticias';
import CadastrarNoticia from './src/pages/CadastrarNoticia';
import Login from './src/pages/Login';
import Cadastrar from './src/pages/Cadastrar';
import EditarPerfil from './src/pages/EditarPerfil';
import SobreNos from './src/pages/SobreNos';
import EditarNoticia from './src/pages/EditarNoticia';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Navbar />
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Noticias" component={Noticias} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
            <Stack.Screen name="CadastrarNoticia" component={CadastrarNoticia} />
            <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
            <Stack.Screen name="SobreNos" component={SobreNos} />
            <Stack.Screen name="EditarNoticia" component={EditarNoticia} />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
