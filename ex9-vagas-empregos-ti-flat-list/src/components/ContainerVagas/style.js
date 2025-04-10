import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerVagas: {
      height: 380,
      padding: 10,
      paddingBottom: 0,
      backgroundColor: '#eee',
    },
    vaga: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      backgroundColor: 'white',
      padding: 12,
      marginBottom: 10
    },
    titulo: {
      color: 'blue',
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    salario: {
      fontWeight: '600',
      marginBottom: 8,
    },
    descricao: {
      fontStyle: 'italic',
      marginBottom: 10,
    },
    contato: {
      color: '#007AFF',
      textDecorationLine: 'underline',
    },
});

export { styles }