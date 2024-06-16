import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Menu from "../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const DailyMissions = ({ navigation }) => {
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

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.missionsContainer}>
          <Text style={styles.sectionTitle}>Missions du jour</Text>
          <View style={styles.missionItem}>
            <Text style={styles.missionText}>Méditation</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFilled} />
            </View>
          </View>
          <View style={styles.missionItem}>
            <Text style={styles.missionText}>Méditation</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFilled} />
            </View>
          </View>
        </View>

        <Text style={styles.categoryTitle}>Catégorie d'exercices</Text>
        <View style={styles.exerciseContainer}>
          <View style={styles.exerciseItem}>
            <Image
              source={require("../assets/meditation.png")}
              style={styles.exerciseImage}
            />
            <Text style={styles.exerciseText}>Nom exo</Text>
            <View style={styles.exerciseTimeContainer}>
              <Text style={styles.exerciseTimeText}>5 min</Text>
            </View>
          </View>
          <View style={styles.exerciseItem}>
            <Image
              source={require("../assets/meditation.png")}
              style={styles.exerciseImage}
            />
            <Text style={styles.exerciseText}>Nom exo</Text>
            <View style={styles.exerciseTimeContainer}>
              <Text style={styles.exerciseTimeText}>5 min</Text>
            </View>
          </View>
          <View style={styles.exerciseItem}>
            <Image
              source={require("../assets/meditation.png")}
              style={styles.exerciseImage}
            />
            <Text style={styles.exerciseText}>Nom exo</Text>
            <View style={styles.exerciseTimeContainer}>
              <Text style={styles.exerciseTimeText}>5 min</Text>
            </View>
          </View>
          <View style={styles.exerciseItem}>
            <Image
              source={require("../assets/meditation.png")}
              style={styles.exerciseImage}
            />
            <Text style={styles.exerciseText}>Nom exo</Text>
            <View style={styles.exerciseTimeContainer}>
              <Text style={styles.exerciseTimeText}>5 min</Text>
            </View>
          </View>
        </View>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  missionsContainer: {
    backgroundColor: "#3F317E",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  missionItem: {
    marginBottom: 10,
  },
  missionText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#555",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFilled: {
    height: "100%",
    width: "50%",
    backgroundColor: "#fff",
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  exerciseContainer: {
    backgroundColor: "#1E1B4D",
    borderRadius: 10,
    padding: 10,
  },
  exerciseItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7259E4",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  exerciseText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  exerciseTimeContainer: {
    backgroundColor: "#B8F8FF",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  exerciseTimeText: {
    color: "#000",
    fontSize: 12,
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default DailyMissions;
