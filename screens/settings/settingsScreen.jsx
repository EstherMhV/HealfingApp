import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
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
          onPress={() => navigation.navigate("personalData")}
        >
          <Ionicons name="finger-print-outline" size={24} color="#fff" />
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
          <Ionicons name="chatbox-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Notifications</Text>
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
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <Ionicons name="shield-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Politique de confidentialité</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Ionicons name="build-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Signaler un bug</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons name="exit-outline" size={24} color="#f00" />
          <Text style={styles.optionTextLogout}>Déconnexion</Text>
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
  optionTextLogout: {
    marginLeft: 16,
    fontSize: 16,
    color: "#f00",
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3F317E",
  },
  footer: {
    backgroundColor: "#3F317E",
  },
});

export default Settings;
