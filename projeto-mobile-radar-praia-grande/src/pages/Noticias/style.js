import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    },
    label: {
      fontWeight: 'bold',
      marginTop: 18,
      marginHorizontal: 20,
      marginBottom: 8,
    },
    filtrosContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // branco com transparência
      margin: 16,
      padding: 16,
      borderRadius: 12,
      elevation: 4, // sombra para Android
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4, // sombra para iOS
    },

});

export { styles }