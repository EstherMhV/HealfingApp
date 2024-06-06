import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const DeepBreathing = ({ navigation }) => {
  const categories = [
    {
      title: "Abdominale",
      image: require("../../assets/meditation.png"),
      navigateTo: "",
    },
    {
      title: "Alternée narines",
      image: require("../../assets/meditation.png"),
      navigateTo: "",
    },
    {
      title: "Respiration carrée",
      image: require("../../assets/meditation.png"),
      navigateTo: "",
    },
    {
      title: "4-7-8",
      image: require("../../assets/meditation.png"),
      navigateTo: "",
    },
    {
      title: "Complète",
      image: require("../../assets/meditation.png"),
      navigateTo: "",
    },
    {
      title: "Co. Cardiaque",
      image: require("../../assets/meditation.png"),
      navigateTo: "",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Categories List Exercises")}
        >
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        <Text style={styles.title}>Respiration profonde</Text>
        <View style={styles.categories}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryCard}
              onPress={() => navigation.navigate(category.navigateTo)}
            >
              <LinearGradient
                colors={["#3F317E", "#7259E4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
              >
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3F317E",
  },
  categoriesContainer: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  categoryImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});

export default DeepBreathing;
