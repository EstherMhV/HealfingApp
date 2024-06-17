import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Diary = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack("Diary")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.diaryList}>
        <Text style={styles.title}>Journaux</Text>
        <LinearGradient
          colors={["#3F317E", "#7259E4"]}
          style={styles.diaryEntry}
        >
          <View style={styles.entryTextContainer}>
            <Text style={styles.entryDate}>16/01/2024</Text>
            <Text style={styles.entryText}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
          <Ionicons
            name="sad"
            size={40}
            color="#fff"
            style={styles.entryIcon}
          />
        </LinearGradient>
        <LinearGradient
          colors={["#3F317E", "#7259E4"]}
          style={styles.diaryEntry}
        >
          <View style={styles.entryTextContainer}>
            <Text style={styles.entryDate}>16/01/2024</Text>
            <Text style={styles.entryText}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
          <Ionicons
            name="sad"
            size={40}
            color="#fff"
            style={styles.entryIcon}
          />
        </LinearGradient>
      </ScrollView>

      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate("AddDataDiary")}
        >
          <Ionicons name="add" size={40} color="#120B2D" />
        </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3F317E",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  diaryList: {
    paddingHorizontal: 20,
  },
  diaryEntry: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  entryTextContainer: {
    flex: 1,
  },
  entryDate: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  entryText: {
    color: "#fff",
  },
  entryIcon: {
    marginLeft: 10,
  },
  fabContainer: {
    position: "absolute",
    right: 20,
    bottom: 90,
    zIndex: 10,
  },
  fab: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8F8FF",
    borderRadius: 30,
    elevation: 8,
  },
  footer: {
    backgroundColor: "#3F317E",
  },
});

export default Diary;
