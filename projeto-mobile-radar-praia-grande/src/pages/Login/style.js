import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    marginHorizontal: 20,
    fontWeight: 'bold',
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
