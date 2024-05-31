
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { useState, useRef } from "react";
import Menu from "../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [isProfileScrolled, setIsProfileScrolled] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 50 && !isProfileScrolled) {
      setIsProfileScrolled(true);
      navigation.navigate("Profile");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.header}
      >
        <Text style={styles.headerText}>Nom et prénom</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>

      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.profileContainer}>
          <View style={styles.profileDetails}>
            <Text style={styles.levelText}>Niveau 05</Text>
            <View style={styles.xpContainer}>
              <Text style={styles.xpText}>XP</Text>
              <View style={styles.xpBar}>
                <View style={styles.xpFill} />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.settingsIcon}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.sectionTitle}>Phrase du jour</Text>
          <View style={styles.separatorLine} />
        </View>

        <View style={styles.dailyQuoteContainer}>
          <Text style={styles.dailyQuoteText}>Mission du jour</Text>
          <Text style={styles.dailyQuoteXP}>nb XP</Text>
        </View>

        <Text style={styles.sectionTitle}>Actu du jour</Text>
        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>
            Nouvelle étude révèle l'efficacité de la méditation
          </Text>
          <Text style={styles.newsDescription}>
            Notre application est ravie d'annoncer une conférence virtuelle
            passionnante sur la gestion du stress et de l'anxiété, conçue pour
            vous fournir des outils pratiques et des conseils précieux ...
          </Text>
          <TouchableOpacity>
            <Text style={styles.newsReadMore}>Lire la suite</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Actu recommandée</Text>
        <View style={styles.recommendedNewsContainer}>
          <Text style={styles.recommendedNewsTitle}>
            Conférence virtuelle sur la gestion du stress et de l'anxiété
          </Text>
          <Text style={styles.recommendedNewsDescription}>
            Notre application est ravie d'annoncer une conférence virtuelle
            passionnante sur la gestion du stress et de l'anxiété, conçue pour
            vous fournir des outils pratiques et des conseils précieux ...
          </Text>
          <TouchableOpacity>
            <Text style={styles.newsReadMore}>Lire la suite</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>

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
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3F317E",
    position: "relative",
  },
  notificationIcon: {
    position: "absolute",
    right: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#B8F8FF",
    padding: 10,
    borderRadius: 10,
  },
  profileDetails: {
    flex: 1,
    alignItems: "center",
  },
  levelText: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
  xpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  xpText: {
    color: "#000",
    marginRight: 10,
  },
  xpBar: {
    flex: 1,
    height: 10,
    backgroundColor: "#E6E0F0",
    borderRadius: 5,
  },
  xpFill: {
    width: "50%",
    height: "100%",
    backgroundColor: "#120B2D",
    borderRadius: 5,
  },
  settingsIcon: {
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  dailyQuoteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#7259E4",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  dailyQuoteText: {
    color: "#fff",
    fontSize: 16,
  },
  dailyQuoteXP: {
    color: "#fff",
    fontSize: 16,
  },
  newsContainer: {
    marginBottom: 20,
  },
  newsTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  newsDescription: {
    color: "#fff",
    marginBottom: 5,
  },
  newsReadMore: {
    color: "#00E0FF",
  },
  recommendedNewsContainer: {
    marginBottom: 20,
  },
  recommendedNewsTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  recommendedNewsDescription: {
    color: "#fff",
    marginBottom: 5,
  },
  footer: {
    backgroundColor: "#3F317E",
  },
});

export default Home;


