import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Menu from "../components/Menu";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuButton}>≡</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher"
        placeholderTextColor="#888"
      />
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="user" size={24} color="#fff" />
          <Text style={styles.optionText}>Informations personnelles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="lock" size={24} color="#fff" />
          <Text style={styles.optionText}>Mot de passe et sécurité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="bell" size={24} color="#fff" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="wheelchair" size={24} color="#fff" />
          <Text style={styles.optionText}>Accessibilité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="moon-o" size={24} color="#fff" />
          <Text style={styles.optionText}>Mode sombre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="history" size={24} color="#fff" />
          <Text style={styles.optionText}>Historique d'activité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="globe" size={24} color="#fff" />
          <Text style={styles.optionText}>Langue et région</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="database" size={24} color="#fff" />
          <Text style={styles.optionText}>Politique de confidentialité</Text>
        </TouchableOpacity>
      </ScrollView>
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3F317E",
  },
  backButton: {
    color: "#fff",
    fontSize: 24,
  },
  menuButton: {
    color: "#fff",
    fontSize: 24,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  iconContainer: {
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    color: "#fff",
  },
});

export default Settings;
