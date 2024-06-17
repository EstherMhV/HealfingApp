import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../../../components/Menu.jsx";

const ExerciceGo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Exercice")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Progressive</Text>
        <Image
          source={require("../../../assets/meditation.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.stepTitle}>1. Préparation (1 minute) :</Text>
        <Text style={styles.stepDescription}>
          • Asseyez-vous confortablement dans un endroit calme.{"\n"}• Fermez
          les yeux et prenez quelques respirations profondes pour vous détendre.
        </Text>
        <Image
          source={require("../../../assets/meditation.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </ScrollView>

      <View style={styles.footer}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3F317E",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  stepTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  stepDescription: {
    color: "#fff",
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 20,
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default ExerciceGo;
