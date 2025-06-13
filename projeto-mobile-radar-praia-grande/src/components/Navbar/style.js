import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 12,
    borderBottomWidth: 1,
  },
  titulo: {
  textAlign: 'center',
  fontSize: 35,
  color: 'white',
  fontWeight: 'bold',
  textShadowColor: 'black',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10,
  paddingVertical: 15,
},

  fundoNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  botaoMenu: {
    padding: 6,
  },
  linkTexto: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  menuDropdown: {
  backgroundColor: '#f0f0f0',
  paddingVertical: 8,
  paddingHorizontal: 12,
  },
  menuItem: {
    paddingVertical: 6,
  },

});

export { styles };
