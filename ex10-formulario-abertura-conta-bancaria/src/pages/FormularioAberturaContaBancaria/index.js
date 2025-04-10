import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './style';

import Titulo from './../../components/Titulo';
import CampoDeTexto from './../../components/CampoDeTexto';
import Select from './../../components/Select';
import Range from './../../components/Range';
import Toggle from './../../components/Toggle';
import Botao from './../../components/Botao';

function FormularioAberturaContaBancaria() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Feminino');
  const [escolaridade, setEscolaridade] = useState('Ensino médio');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);

  const [dadosConfirmados, setDadosConfirmados] = useState(null);

  function exibirDadosInformados() {
    setDadosConfirmados({
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      brasileiro: brasileiro ? 'Sim' : 'Não'
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Titulo titulo="Abertura de conta" />

        <Text>Nome: <CampoDeTexto value={nome} onChangeText={setNome} placeholder="Digite seu nome" /></Text>
        <Text>Idade: <CampoDeTexto value={idade} onChangeText={setIdade} placeholder="Digite sua idade" /></Text>
        <Text>Sexo: <Select opcao1="Feminino" opcao2="Masculino" opcao3="Não-binário" onChange={setSexo} /></Text>
        <Text>Escolaridade: <Select opcao1="Ensino médio" opcao2="Ensino superior" opcao3="Pós-graduação" onChange={setEscolaridade} /></Text>
        <Text>Limite: <Range valorMinimo={0} valorMaximo={1000} onChange={setLimite} /></Text>
        <Text>Brasileiro: <Toggle value={brasileiro} onChange={setBrasileiro} /></Text>
        <Botao texto="Confirmar" funcao={exibirDadosInformados} />

        <Titulo titulo="Dados informados" />
        {dadosConfirmados && (
          <>
            <Text style={styles.infoText}>Nome: {dadosConfirmados.nome}</Text>
            <Text style={styles.infoText}>Idade: {dadosConfirmados.idade}</Text>
            <Text style={styles.infoText}>Sexo: {dadosConfirmados.sexo}</Text>
            <Text style={styles.infoText}>Escolaridade: {dadosConfirmados.escolaridade}</Text>
            <Text style={styles.infoText}>Limite: R$ {dadosConfirmados.limite.toFixed(2)}</Text>
            <Text style={styles.infoText}>Brasileiro: {dadosConfirmados.brasileiro}</Text>
          </>
        )}
      </ScrollView>
    </View>
  );
}

export default FormularioAberturaContaBancaria;
