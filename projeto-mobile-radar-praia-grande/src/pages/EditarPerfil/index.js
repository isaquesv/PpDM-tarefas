import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './style';

import Navbar from '../../components/Navbar';
import Imagem from '../../components/Imagem';
import Campo from '../../components/Campo';
import Botao from '../../components/Botao';

function EditarPerfil() {
  const [nome, setNome] = useState('Caio Lima');
  const [email, setEmail] = useState('caio_lima95@hotmail.com');
  const [biografia, setBiografia] = useState('Se a vida não faz sentido, pelo menos que renda uma boa história pra contar.');
  
  function atualizarPerfil() {
    alert("Perfil atualizado com sucesso!");
    alert("Título: " + nome);
    alert("E-mail: " + email);
    alert("Biografia: " + biografia);
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

        <Botao
          texto="Atualizar informações"
          funcao={atualizarPerfil} />
      </ScrollView>
    </View>
  )
}

export default EditarPerfil