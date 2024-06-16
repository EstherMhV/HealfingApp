import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Menu from "../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const articles = [
  {
    title: "Nouvelle étude révèle l'efficacité de la méditation",
    text: "Notre application est ravie d'annoncer une conférence virtuelle passionnante sur la gestion du stress et de l'anxiété, conçue pour vous fournir des outils pratiques et des conseils précieux ...",
    image: require("../assets/meditation.png"),
  },
  {
    title: "Conférence virtuelle sur la gestion du stress et de l'anxiété",
    text: "Notre application est ravie d'annoncer une conférence virtuelle passionnante sur la gestion du stress et de l'anxiété, conçue pour vous fournir des outils pratiques et des conseils précieux ...",
    image: require("../assets/meditation.png"),
  },
  {
    title: "Semaine de sensibilisation à la santé mentale",
    text: "Notre application est fière de soutenir la Semaine de sensibilisation à la santé mentale, un événement dédié à la promotion du bien-être émotionnel et à la sensibilisation aux défis de la santé mentale. Cette semaine spéciale ...",
    image: require("../assets/meditation.png"),
  },
  {
    title: "Célébration de la diversité et de l'inclusion dans la santé mentale",
    text: "Notre application est fière de célébrer la diversité et l'inclusion dans le domaine de la santé mentale. Nous reconnaissons l'importance de respecter et de valoriser les différentes ...",
    image: require("../assets/meditation.png"),
  },
];

const News = ({ navigation }) => {
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

      <ScrollView contentContainerStyle={styles.newsList}>
        {articles.map((article, index) => (
          <View key={index}>
            <View style={styles.newsEntry}>
              <View style={styles.textContainer}>
                <Text style={styles.entryTitle}>{article.title}</Text>
                <Text style={styles.entryText}>{article.text}</Text>
                <TouchableOpacity>
                  <Text style={styles.readMore}>Lire la suite</Text>
                </TouchableOpacity>
              </View>
              <Image source={article.image} style={styles.entryImage} />
            </View>
            {index < articles.length - 1 && (
              <View style={styles.separator} />
            )}
          </View>
        ))}
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
  newsList: {
    paddingHorizontal: 20,
  },
  newsEntry: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  entryTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
  },
  entryText: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 14,
  },
  readMore: {
    color: "#B8F8FF",
    textDecorationLine: "underline",
  },
  entryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#B8F8FF",
    marginVertical: 10,
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default News;
