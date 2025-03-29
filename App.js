import { Image } from 'expo-image';
import { StyleSheet, Text, SafeAreaView, FlatList, SectionList, View, ImageBackground, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const banner = [
  { id: 1, image: require('./img/banner1.jpg') },
  { id: 2, image: require('./img/banner2.jpg') },
  { id: 3, image: require('./img/03banner.jpg') },
];

const categorias = [
  {
    id: 1,
    titulo: "Doces",
    data: [
      "Macarons – Deliciosos biscoitos finos de amêndoa recheados com creme.",
      "Crêpes – Panquecas finas, muitas vezes recheadas com chocolate, frutas ou doce de leite.",
      "Madeleines – Biscoitos fofos e leves, com uma forma de concha.",
      "Tarte Tatin – Torta invertida de maçã caramelizada.",
      "Éclairs – Massas recheadas com creme e cobertas com glacê.",
    ],
  },
  {
    id: 2,
    titulo: "Salgados",
    data: [
      "Quiche Lorraine – Torta salgada feita com ovos, creme e bacon.",
      "Croque Monsieur – Sanduíche de presunto e queijo, geralmente coberto com molho béchamel e gratinado.",
      "Baguette – Pão francês clássico, crocante por fora e macio por dentro, que acompanha vários pratos.",
      "Pâté en Croûte – Carne ou patê envolto em massa folhada e assado.",
      "Soupe à l'oignon – Sopa de cebola, muitas vezes gratinada com queijo e servida com pão.",
    ],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("./img/fundopreto.png")} style={styles.background}>

        <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require("./img/logoimg.png")} style={styles.logo} />
        </View>


        <FlatList
          data={banner}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.bannerContainer}>
              <Image source={item.image} style={styles.bannerImage} imageStyle={{ borderRadius: 10 }} />
            </View>
          )}
          style={styles.horizontalList}
        />

        <View style={styles.descricao}>
        <Text style={styles.title}>
          Nossos Produtos
        </Text>
        <Text style={styles.comentario}>
          Conheça nossos produtos incríveis!
        </Text>
        </View>

        <SectionList
          sections={categorias}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>{section.titulo}</Text>
            </View>
          )}
          renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
          ListFooterComponent={<View style={{ height: 20 }} />}
          style={styles.sectionList}
        />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 20,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: {
    width: 150,
    height: 150,
  },

  horizontalList: {
    marginBottom: 20,
    paddingHorizontal: 6,
  },

  bannerContainer: {
    marginHorizontal: 10,
  },

  bannerImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },

  descricao: {
    flexGrow: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)', 
    textAlign: 'center',
    marginBottom: 10,
  },

  comentario: {
    fontSize: 16,
    color: 'rgb(211, 204, 204)',
    textAlign: 'center',
    marginBottom: 20,
  },

  sectionHeaderContainer: {
    backgroundColor: 'rgba(68, 68, 68, 0.9)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 10,
  },

  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },

  itemText: {
    marginHorizontal: 15,
    fontSize: 16,
    color: '#fff',
    paddingVertical: 5,
  },

  sectionList: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 10,
  },
});

