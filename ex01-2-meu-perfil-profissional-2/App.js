import { View, Text, Image } from 'react-native';

import TituloPrincipal from './src/TituloPrincipal/index'
import Imagem from './src/Imagem/index'
import Texto from './src/Texto/index'

function MeuPerfilProfissional(){
  return(
     <View style={{margin: 'auto'}}>
        <TituloPrincipal/>
        <Imagem/>
        <Texto titulo={"Dados pessoais"} texto1={"- Nome: Isaque Silva Venancio"} texto2={"- Idade: 20 anos"} texto3={"- Desenvolvedor backend"}/>
        <Texto titulo={"Formação"} texto1={"- Ensino superior incompleto"} texto2={"- Técnico: Informática para Internet"} texto3={"- Cursando: Análise e desenvolvimento de sistemas"}/>
        <Texto titulo={"Experiência"} texto1={"- Projetos pessoais"}/>
        <Texto titulo={"Projetos"} texto1={"- github.com/isaquesv"}/>

      </View>
  )
}

export default MeuPerfilProfissional;