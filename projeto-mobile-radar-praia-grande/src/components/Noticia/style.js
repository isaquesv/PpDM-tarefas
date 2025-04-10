import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    noticia: {
      marginVertical: 10,
      marginLeft: 20,
      marginRight: 7,
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#aaa',
      borderRadius: 6,
      backgroundColor: 'white',
    },
    titulo: {
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    bairro: {
      marginHorizontal: 20,
    },
    data: {
      marginVertical: 10,
      marginHorizontal: 20,
    },
    autor: {
      marginHorizontal: 20,
      marginBottom: 20,
    },
    link: {
      color: '#007AFF',
      textDecorationLine: 'underline',
      fontStyle: 'italic',
    }
});

export { styles }