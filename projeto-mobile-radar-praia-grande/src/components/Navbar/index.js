import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

function Navbar({ navegar }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.titulo}>Radar Praia Grande</Text>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navegar('Noticias')}>
            <Text style={styles.menuItem}>Notícias</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegar('Login')}>
            <Text style={styles.menuItem}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegar('Cadastrar')}>
            <Text style={styles.menuItem}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegar('EditarPerfil')}>
            <Text style={styles.menuItem}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegar('SobreNos')}>
            <Text style={styles.menuItem}>Sobre nós</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default Navbar;
