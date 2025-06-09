import { View, ScrollView } from 'react-native';
import { styles } from './style';
import Vaga from './../../components/Vaga';

function containerVagas(){
  return (
    <View style={styles.containerVagas}>
      <ScrollView>
        <Vaga
          titulo={"Oracle - Desenvolvedor Backend Oracle Cloud"}
          salario={"R$ 12.800,00 + benefícios"}
          descricao={"Você vai atuar na construção e manutenção de soluções em Oracle Cloud Infrastructure, integrando sistemas legados e garantindo alta performance. Espera-se domínio em PL/SQL, automação de tarefas com scripts e conhecimentos em arquitetura distribuída. Trabalhar na Oracle é fazer parte da revolução da nuvem corporativa. Vem com a gente transformar o futuro da tecnologia."}
          contato={"rh@oraclebrasil.com"}
        />
        <Vaga
          titulo={"IBM - Cientista de Dados Jr — IBM Watson Projects"}
          salario={"R$ 9.500,00 + participação nos lucros"}
          descricao={"Faça parte dos projetos de IA mais inteligentes do planeta. A IBM está em busca de um(a) Cientista de Dados Jr para integrar a equipe do Watson, aplicando machine learning e NLP para criar soluções de ponta para empresas globais. Python, Pandas, SQL e noções de Spark são um diferencial. Atue ao lado dos melhores!"}
          contato={"talentos.ibm@ibm.com"}
        />
        <Vaga
          titulo={"McDonald's - TI Corporativo"}
          salario={"R$ 4.200,00 + vale lanches"}
          descricao={"Dê suporte aos sistemas de pedidos, delivery e terminais de autoatendimento das unidades McDonald's do Brasil. Responsável por garantir a estabilidade dos sistemas internos, realizar testes em aplicativos e reportar bugs. Experiência com suporte técnico, redes e manutenção de sistemas é desejável. Vontade de crescer é obrigatório."}
          contato={"recrutamento@mcbrtech.com"}
        />
        <Vaga
          titulo={"Jacaré Lan House - Estagiário Técnico em Redes, Manutenção de PCs Gamer, Designer Web, Gerente Geral, Atendente, Suporte e Zelador"}
          salario={"R$ 600,99"}
          descricao={"Procuramos um estagiário esforçado, dedicado e com sede de evoluir profissionalmente! Você será responsável por manter os PCs funcionando corretamente, limpar as migalhas de salgadinhos dos teclados, reiniciar roteadores, criar lindas artes no Canva, e ainda gerenciar tudo isso com um sorriso no rosto! Requisitos técnicos: conhecimentos nos S.O. Windows e Linux; gerenciamento de redes sociais; domínio em pacote Office 365, Canva, Photoshop, edição de vídeos e impressão de documentos; nível intermediário em espanhol e inglês. Precisamos de voluntários urgentemente!!"}
          contato={"contato@alligatorenet.com.br"}
        />
      </ScrollView>
    </View>
  );
}

export default containerVagas;
