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

const Exercice = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack("Home")}>
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
        <Text style={styles.duration}>10 mn</Text>
        <Text style={styles.xp}>50 XP</Text>
        <Text style={styles.description}>
          Détendez-vous progressivement muscles par muscles.{"\n"}
          Respirez profondément et concentrez-vous sur chaque partie du corps.
          {"\n"}
          Contractez puis relâchez chaque groupe musculaire.{"\n"}
          Ressentez la tension se dissiper doucement.{"\n"}
          Finissez en état de calme profond.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ExerciceGo")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Commencer</Text>
        </TouchableOpacity>
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
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
  },
  duration: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  xp: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    color: "#fff",
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#B8F8FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#120B2D",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default Exercice;
