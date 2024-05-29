import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Menu from "../components/Menu.jsx";
import Header from "../components/Header.jsx";
import { Ionicons } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <Ionicons
          name="search-outline"
          size={30}
          color="#808080"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search ..."
          placeholderTextColor="#808080"
          keyboardType="email-address"
        />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("PersonalInfo")}
        >
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Informations personnelles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("PasswordSecurity")}
        >
          <Ionicons name="key-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Mot de passe et sécurité</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Ionicons name="bell" size={24} color="#fff" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Accessibility")}
        >
          <Ionicons name="accessibility-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Accessibilité</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("DarkMode")}
        >
          <Ionicons name="moon-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Mode sombre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("ActivityHistory")}
        >
          <Ionicons name="time-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Historique d'activité</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("LanguageRegion")}
        >
          <Ionicons name="language-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Langue et région</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <Ionicons name="shield-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Politique de confidentialité</Text>
        </TouchableOpacity>
      </ScrollView>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
    padding: 16,
  },

  backButton: {
    color: "#fff",
    fontSize: 24,
  },
  menuButton: {
    color: "#fff",
    fontSize: 24,
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#fff",
  },
  scrollContainer: {
    flex: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    color: "#fff",
  },
});

export default Settings;
