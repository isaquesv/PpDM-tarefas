import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';

function Navbar({ navegar }) {
  const menuItems = [
    { key: 'Noticias', label: 'Notícias' },
    { key: 'Login', label: 'Login' },
    { key: 'Cadastrar', label: 'Cadastrar-se' },
    { key: 'EditarPerfil', label: 'Perfil' },
    { key: 'SobreNos', label: 'Sobre nós' },
    { key: 'EditarNoticia', label: 'Editar notícia' },
  ];

  return (
    <View style={styles.navbar}>
      <Text style={styles.titulo}>Radar Praia Grande</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.key}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.menu}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navegar(item.key)} style={styles.menuItemWrapper}>
            <Text style={styles.menuItem}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Navbar;
