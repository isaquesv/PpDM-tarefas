import { View, Text } from 'react-native';
import { styles } from './style';

function Vaga(props){
  let titulo = props.titulo;
  let salario = props.salario;
  let descricao = props.descricao;
  let contato = props.contato;

  return (
    <View style={styles.vaga}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.salario}>Salário: {salario}</Text>
      <Text style={styles.descricao}>Descrição: {descricao}</Text>
      <Text>Contato: <Text style={styles.contato}>{contato}</Text></Text>
    </View>
  );
}

export default Vaga;