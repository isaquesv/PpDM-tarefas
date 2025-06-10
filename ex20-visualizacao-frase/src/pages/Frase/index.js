// src/pages/Frase/Frase.js
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Frase() {
  const [isDia, setIsDia] = useState(true);
  const [isPequeno, setIsPequeno] = useState(false);

  useEffect(() => {
    carregarPreferencias();
  }, []);

  useEffect(() => {
    salvarPreferencias();
  }, [isDia, isPequeno]);

  async function carregarPreferencias() {
    try {
      const tema = await AsyncStorage.getItem('tema');
      const tamanho = await AsyncStorage.getItem('tamanho');
      if (tema !== null) setIsDia(tema === 'claro');
      if (tamanho !== null) setIsPequeno(tamanho === 'grande');
    } catch (e) {
      console.log('Erro ao carregar preferências:', e);
    }
  }

  async function salvarPreferencias() {
    try {
      await AsyncStorage.setItem('tema', isDia ? 'claro' : 'escuro');
      await AsyncStorage.setItem('tamanho', isPequeno ? 'grande' : 'pequeno');
    } catch (e) {
      console.log('Erro ao salvar preferências:', e);
    }
  }

  const temaEstilo = {
    backgroundColor: isDia ? '#f9f9f9' : '#1c1c1c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textoEstilo = {
    fontSize: isPequeno ? 28 : 16,
    color: isDia ? '#000' : '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
  };

  return (
    <View style={temaEstilo}>
      <StatusBar barStyle={isDia ? 'dark-content' : 'light-content'} />

      <View style={styles.topControls}>
        <Text style={[styles.title, { color: isDia ? '#000' : '#fff' }]}>Frase</Text>

        <View style={styles.switchRow}>
          <View style={styles.switchContainer}>
            <Text style={{ color: isDia ? '#000' : '#fff', marginRight: 10 }}>Dia</Text>
            <Switch value={isDia} onValueChange={setIsDia} />
          </View>

          <View style={styles.switchContainer}>
            <Text style={{ color: isDia ? '#000' : '#fff', marginRight: 10 }}>Pequeno</Text>
            <Switch value={isPequeno} onValueChange={setIsPequeno} />
          </View>
        </View>
      </View>

      <Text style={[textoEstilo, { marginTop: 120 }]}>
        "O sucesso é a soma de pequenos esforços repetidos todos os dias."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topControls: {
    position: 'absolute',
    top: 40,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
