import { View } from 'react-native'
import React, { useState } from 'react';
import Noticias from './src/pages/Noticias'
import CadastrarNoticia from './src/pages/CadastrarNoticia'
import EditarPerfil from './src/pages/EditarPerfil'
import SobreNos from './src/pages/SobreNos'
import Login from './src/pages/Login'
import Cadastrar from './src/pages/Cadastrar'
import Navbar from './src/components/Navbar'


function App() {
  const [paginaAtual, setPaginaAtual] = useState('Noticias');

  const renderPagina = () => {
    switch (paginaAtual) {
      case 'Noticias':
        return <Noticias navegar={setPaginaAtual}/>;
      case 'Login':
        return <Login />;
      case 'Cadastrar':
        return <Cadastrar />;
      case 'CadastrarNoticia':
        return <CadastrarNoticia />;
      case 'EditarPerfil':
        return <EditarPerfil />;
      case 'SobreNos':
        return <SobreNos />;
      default:
        return <Noticias />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar navegar={setPaginaAtual} />
      {renderPagina()}
    </View>

  );
}

export default App
 