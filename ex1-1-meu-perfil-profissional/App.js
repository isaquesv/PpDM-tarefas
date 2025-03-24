import { View, Text, Image } from 'react-native';

 // Mude aqui o nome da sua imagem
import myImage from './assets/images/eu.jpg';

function MeuPerfilProfissional(){
    let nome = 'Isaque Silva Venancio';
    let dataNascimento = '05/03/2005';
    let idade = 19;
    let formacaoAnterior = 'Técnico: Informática para Internet';
    let formacaoAtual = 'Cursando ensino superior';
    let experiencia = 'Projetos pessoais';
    let projetos = 'github.com/isaquesv';

  return(
     <View>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 600}}>Meu Perfil App:</Text>
        <Image source={myImage} style={{width: 200, height: 200, marginTop: 10, marginLeft: 60, marginRight: 60, marginBottom: 20}} />

        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight: 600}}>Dados pessoais:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Data de nascimento: {dataNascimento}</Text>
          <Text>Idade: {idade}</Text>
        </View>

        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 18, marginTop: 15, fontWeight: 600}}>Formação:</Text>
          <Text>- {formacaoAnterior}</Text>
          <Text>- {formacaoAtual}</Text>
        </View>
        
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 18, marginTop: 15,fontWeight: 600}}>Experiência:</Text>
          <Text>- {experiencia}</Text>
        </View>
        
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 18, marginTop: 15,fontWeight: 600}}>Projetos:</Text>
          <Text>- {projetos}</Text>
        </View>


      </View>
  )
}

export default MeuPerfilProfissional;