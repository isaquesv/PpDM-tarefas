import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    produto: {
      height: 430,
      width: 200,
      borderWidth: 1,
      marginHorizontal: 5,
      backgroundColor: 'white'
    },
    titulo: {
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 10,
      paddingHorizontal: 10,
      borderBottomWidth: 1
    },
    preco: {
      textAlign: 'center',
      paddingVertical: 5,
      borderBottomWidth: 1
    },
    descricao: {
      fontStyle: 'italic',
      margin: 10
    }
});

export { styles }