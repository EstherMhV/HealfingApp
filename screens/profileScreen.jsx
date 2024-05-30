import React from "react";
import Menu from "../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Profil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nom et prénom</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileImageContainer}>
        <Text>image de profil</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Ionicons name="time-outline" size={30} color="#fff" />
          <Text style={styles.statText}>Temps joué :</Text>
          <Text style={styles.statValue}>20 h</Text>
        </View>
        <View style={styles.statBox}>
          <Ionicons name="time-outline" size={30} color="#fff" />
          <Text style={styles.statText}>Temps sur L'application</Text>
          <Text style={styles.statValue}>25 h</Text>
        </View>
        <View style={styles.statBox}>
          <Ionicons name="shield-outline" size={30} color="#fff" />
          <Text style={styles.statText}>Expérience totale Gagnée</Text>
          <Text style={styles.statValue}>50 XP</Text>
        </View>
        <View style={styles.statBox}>
          <Ionicons name="medal-outline" size={30} color="#fff" />
          <Text style={styles.statText}>Exercices totaux Accomplies</Text>
          <Text style={styles.statValue}>10</Text>
        </View>
      </View>

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
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#3F317E",
    position: "relative",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  notificationIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  statBox: {
    width: "45%",
    backgroundColor: "#7259E4",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  statText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  statValue: {
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },
  footer: {
    backgroundColor: "#3F317E",
  },
});

export default Profil;
