import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    noticia: {
      margin: 10,
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: 'white'
    },
    titulo: {
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 15
    },
    bairro: {
      marginHorizontal: 10
    },
    data: {
      margin: 10
    },
    autor: {
      color: '#007AFF',
      textDecorationLine: 'underline',
      fontStyle: 'italic'
    }
});

export { styles }