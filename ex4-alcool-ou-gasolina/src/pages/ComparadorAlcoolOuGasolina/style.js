import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  imagem: {
    width: 220,
    height: 140,
    margin: 'auto',
    marginBottom: 20
  },
  campoDeTexto: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15
  },
  botao: {
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: 'green'
  },
  textoBotao: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  textoResultado: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    color: 'red'
  }
});

export { styles }