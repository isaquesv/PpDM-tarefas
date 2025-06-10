// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Conversor from './components/Conversor';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Conversor />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
