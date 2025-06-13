import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // pode deixar vazio ou adicionar margens se quiser
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  boxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
});

export { styles };
