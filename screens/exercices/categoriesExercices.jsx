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

const CategoriesExercices = ({ navigation }) => {
  const categories = [
    {
      title: "Méditation",
      image: require("../../assets/meditation.png"),
      exercises: "06 Exercices",
      navigateTo: "Meditation",
    },
    {
      title: "Respir. profonde",
      image: require("../../assets/meditation.png"),
      exercises: "06 Exercices",
      navigateTo: "DeepBreathing",
    },
    {
      title: "Relax. musculaire",
      image: require("../../assets/meditation.png"),
      exercises: "06 Exercices",
      navigateTo: "MuscleRelaxation",
    },
    {
      title: "Pleine conscience",
      image: require("../../assets/meditation.png"),
      exercises: "06 Exercices",
      navigateTo: "Mindfulness",
    },
    {
      title: "Ancrage sensoriel",
      image: require("../../assets/meditation.png"),
      exercises: "06 Exercices",
      navigateTo: "SensoryAnchoring",
    },
    {
      title: "Relax. auditive",
      image: require("../../assets/meditation.png"),
      exercises: "06 Exercices",
      navigateTo: "AuditoryRelaxation",
    },
    {
      title: "Art thérapie",
      image: require("../../assets/meditation.png"),
      exercises: "06 Exercices",
      navigateTo: "ArtTherapy",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        <Text style={styles.title}>Catégorie d’exercices</Text>
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
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryExercises}>
                  {category.exercises}
                </Text>
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
  categoriesContainer: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
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
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoryImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  categoryExercises: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoriesExercices;
