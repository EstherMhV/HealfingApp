import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PersonalData = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack("settingsScreen")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Informations personnelles</Text>

      <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Pseudo</Text>
            <Text style={styles.infoValue}>username</Text>
          </View>
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Nom</Text>
            <Text style={styles.infoValue}>Regina</Text>
          </View>
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Prénom</Text>
            <Text style={styles.infoValue}>Sophie</Text>
          </View>
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Date de naissance</Text>
            <Text style={styles.infoValue}>01/01/2024</Text>
          </View>
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Genre</Text>
            <Text style={styles.infoValue}>Autre</Text>
          </View>
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Adresse e-mail</Text>
            <Text style={styles.infoValue}>sophie.r@gmail.com</Text>
          </View>
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Mot de passe</Text>
            <Text style={styles.infoValue}>********</Text>
          </View>
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
    padding: 16,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "#120B2D",
    borderRadius: 8,
    padding: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    color: "white",
    fontSize: 16,
  },
  infoValue: {
    color: "white",
    fontSize: 16,
    marginTop: 4,
  },
  modifyButton: {
    backgroundColor: "#120B2D",
    borderRadius: 4,
    padding: 8,
  },
  modifyText: {
    color: "white",
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3F317E",
  },
});

export default PersonalData;
