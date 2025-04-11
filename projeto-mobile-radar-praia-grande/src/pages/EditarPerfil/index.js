import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './style';

import Imagem from '../../components/Imagem';
import Campo from '../../components/Campo';
import Range from '../../components/Range';
import Toggle from '../../components/Toggle';
import Botao from '../../components/Botao';

function EditarPerfil() {
  const [nome, setNome] = useState('Caio Lima');
  const [email, setEmail] = useState('caio_lima95@hotmail.com');
  const [biografia, setBiografia] = useState('Se a vida não faz sentido, pelo menos que renda uma boa história pra contar.');
  const [idade, setIdade] = useState(29);
  const [escritor, setEscritor] = useState(true);
  
  function atualizarPerfil() {
    alert("Perfil atualizado com sucesso!");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Editar perfil</Text>
        <Imagem
          uri="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1744297191~exp=1744300791~hmac=4c2d76f08bc3c0e8d616f70f6846c1cac87434139779017fa88fcd4269374134&w=996" />
        
        <Text style={styles.label}>Nome</Text>
        <Campo
          value={nome}
          onChangeText={setNome}
          placeholder="John Doe" />
          
        <Text style={styles.label}>E-mail</Text>
        <Campo
          value={email}
          onChangeText={setEmail}
          placeholder="john_doe@gmail.com" />
          
        <Text style={styles.label}>Biografia</Text>
        <Campo
          value={biografia}
          onChangeText={setBiografia}
          placeholder="Conte um pouco sobre você" />

        <Text style={styles.label}>Idade:</Text>
        <Range
          valorMinimo={0}
          valorMaximo={110}
          valor={idade}
          onChange={setIdade} />

        <Text style={styles.label}>Escritor:</Text>
        <Toggle
          value={escritor}
          onChange={setEscritor} />

        <Botao
          texto="Atualizar informações"
          funcao={atualizarPerfil} />
      </ScrollView>
    </View>
  )
}

export default EditarPerfil
