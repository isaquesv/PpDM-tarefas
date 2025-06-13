import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function Fundo({ children }) {
  return (
    <ImageBackground
      source={require('../../../assets/newspaper_collage_texture.jpg')}
      style={styles.fundo}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
  },
});
