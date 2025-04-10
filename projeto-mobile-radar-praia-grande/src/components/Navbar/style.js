import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    padding: 12,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 2,
    paddingVertical: 8, // espaço acima/abaixo do texto
    paddingHorizontal: 10, // espaço dos lados

  },
  menuItem: {
    fontSize: 16,
    marginHorizontal: 10,
    color: 'black', // pode mudar a cor conforme sua preferência
    },
  });

export { styles };
