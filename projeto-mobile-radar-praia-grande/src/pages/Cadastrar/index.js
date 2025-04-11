import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './style'

import Campo from '../../components/Campo';
import Range from '../../components/Range';
import Toggle from '../../components/Toggle';
import Botao from '../../components/Botao';

function Cadastrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState(1);
  const [escritor, setEscritor] = useState(false);

  const handleCadastro = () => {
    if (nome && email && senha) {
      alert('Cadastro realizado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
      setIdade(1);
      setEscritor(false);
    } else {
      alert('Preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Cadastrar-se</Text>

        <Campo
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <Campo
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <Campo
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Qual a sua idade?</Text>
        <Range
          valorMinimo={1}
          valorMaximo={110}
          valor={idade}
          onChange={setIdade} />

        <Text style={styles.label}>Você é um escritor?</Text>
        <Toggle
          value={escritor}
          onChange={setEscritor} />

        <Botao
          texto="Cadastrar"
          funcao={handleCadastro} />
      </ScrollView>
    </View>
  );
}

export default Cadastrar;
