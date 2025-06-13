// src/components/Navbar/index.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

function Navbar() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);
  
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const menuItems = [
    { key: 'Login', label: 'Login' },
    { key: 'Cadastrar', label: 'Cadastrar-se' },
    { key: 'EditarPerfil', label: 'Editar Perfil' },
    { key: 'EditarNoticia', label: 'Editar notícia' },
  ];

  return (
    <View style={styles.navbar}>
      <ImageBackground
        source={require('../../../assets/newspaper_collage_texture.jpg')}
        style={styles.header}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <Text style={styles.titulo}>Radar Praia Grande</Text>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/white-paper-texture.jpg')}
        style={styles.fundoNavbar}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Noticias')}>
          <Text style={styles.linkTexto}>Notícias</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SobreNos')}>
          <Text style={styles.linkTexto}>Sobre Nós</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkTexto}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleMenu} style={styles.botaoMenu}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
      </ImageBackground>

      {menuAberto && (
        <View style={styles.menuDropdown}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                navigation.navigate(item.key);
                setMenuAberto(false);
              }}
              style={styles.menuItem}
            >
              <Text style={styles.linkTexto}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

export default Navbar;
