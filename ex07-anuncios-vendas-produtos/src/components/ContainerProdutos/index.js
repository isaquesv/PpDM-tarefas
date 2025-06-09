import { View, ScrollView } from 'react-native';
import { styles } from './style';
import Produto from './../../components/Produto';

function ContainerProdutos(){
  return (
    <View style={styles.containerProdutos}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.scroll}>
        <Produto
          urlImagemProduto={"https://www.guiadosperifericos.com.br/file/produto/3041/fone-4leader.jpg"}
          titulo={"Fone Bluetooth 4Leader"}
          preco={"R$ 199,90"}
          descricao={"Com microfone, cancelamento de ruído, à prova d’água e até 20h de bateria — ideal para esportes e uso ao ar livre."}
        />
        <Produto
          urlImagemProduto={"https://images.tcdn.com.br/img/img_prod/1265141/smartwatch_samsung_galaxy_fit3_c_tela_1_6_polegadas_grafite_sm_r390_2259_1_d05d24b26e5473df2c598595acfe677b.png"}
          titulo={"Smartwatch Samsung Galaxy Fit3 Display 1.6'' Grafite"}
          preco={"R$ 309,00"}
          descricao={"Acompanhe seus batimentos, passos, sono e notificações com estilo. Resistente à água e compatível com Android e iOS."}
        />
        <Produto
          urlImagemProduto={"https://walitastore.vtexassets.com/arquivos/ids/160947-800-800?v=638610512822770000&width=800&height=800&aspect=true"}
          titulo={"Cafeteira Espresso Automática Série 1200 Philips Walita"}
          preco={"R$ 229,90"}
          descricao={"Prepare até 5 xícaras com aroma e sabor preservados. Acorde com café pronto e quente todas as manhãs."}
        />
        <Produto
          urlImagemProduto={"https://ae01.alicdn.com/kf/H51534fd8ff99452d9a77d8abf9027bb2A.jpg_640x640q90.jpg"}
          titulo={"Caneca do perigoso"}
          preco={"R$ 999.999,99"}
          descricao={"Caneca exclusiva com a estampa do homem mais engenhoso (e perigoso) dos anos 80. MacGyver estiloso com seu míssil no ombro. Porque se você não vai tomar café com atitude, é melhor nem tomar!"}
        />
        <Produto
          urlImagemProduto={"https://m.media-amazon.com/images/I/51ENebwZ88L.jpg"}
          titulo={"Mini Projetor Portatil 5G Wifi 6 BT 5.0 Android 11"}
          preco={"R$ 245,50"}
          descricao={"Transforme qualquer parede em uma tela de cinema. Compatível com HDMI, USB e Wi-Fi. Ótimo para filmes e apresentações."}
        />
      </ScrollView>
    </View>
  );
}

export default ContainerProdutos;
