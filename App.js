import { Image } from 'expo-image';
import { StyleSheet, Text, SafeAreaView, FlatList, SectionList } from 'react-native';

const banner = [
  { id: 1, image: require('./img/banner01.png') },
  { id: 2, image: require('./img/baner02.png') },
  { id: 3, image: require('./img/banner03.png') },
]
const doces = [
  {
    id: 1, 
    titulo: "Doces", 
    data: [ 
      "Macarons – Deliciosos biscoitos finos de amêndoa recheados com creme.",
      "Crêpes – Panquecas finas, muitas vezes recheadas com chocolate, frutas ou doce de leite.",
      "Madeleines – Biscoitos fofos e leves, com uma forma de concha.",
      "Tarte Tatin – Torta invertida de maçã caramelizada.",
      "Éclairs – Massas recheadas com creme e cobertas com glacê.",
    ]
  },
  {
    id: 2, 
    titulo: "Salgados", 
    data: [ 
      "Quiche Lorraine – Torta salgada feita com ovos, creme e bacon.",
      "Croque Monsieur – Sanduíche de presunto e queijo, geralmente coberto com molho béchamel e gratinado.",
      "Baguette – Pão francês clássico, crocante por fora e macio por dentro, que acompanha vários pratos.",
      "Pâté en Croûte – Carne ou patê envolto em massa folhada e assado.",
      "Soupe à l'oignon – Sopa de cebola, muitas vezes gratinada com queijo e servida com pão."
    ]
  }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={banner}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.bannerImage} />
        )}
        style={styles.horizontalList}
      />

      <SectionList
        sections={doces}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.titulo}</Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item}</Text>
        )}
        style={styles.sectionList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },
  horizontalList: {
    marginVertical: 10,
  },
  bannerImage: {
    width: 360,
    height: 200,
    marginHorizontal: 5, 
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    paddingLeft: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 5,
  },
  sectionList: {
    flexGrow: 1,
  },
});
