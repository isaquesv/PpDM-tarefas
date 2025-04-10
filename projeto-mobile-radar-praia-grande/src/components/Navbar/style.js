import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    padding: 12,
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  titulo: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,

  },
  menuItem: {
    fontSize: 16,
    marginHorizontal: 10,
    },
  });

export { styles };
