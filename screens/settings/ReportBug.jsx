import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { useState } from "react";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const ReportBug = ({ navigation }) => {
  const [bugDescription, setBugDescription] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Signaler un bug</Text>

        <View style={styles.formGroup}>
          <Ionicons
            name="bug-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Description du bug</Text>
            <TextInput
              style={styles.input}
              value={bugDescription}
              onChangeText={setBugDescription}
              placeholder="Décrivez le problème rencontré"
              placeholderTextColor="#E6E0F0"
              multiline
            />
          </View>
        </View>

        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoButtonText}>
            Ajouter une capture d'écran
          </Text>
        </TouchableOpacity>
        {screenshot && (
          <Image source={{ uri: screenshot }} style={styles.image} />
        )}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Soumettre le bug</Text>
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#1c1c3a",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#3F317E",
    borderWidth: 1,
    height: 100,
    textAlignVertical: "top",
  },
  icon: {
    marginRight: 10,
  },
  photoButton: {
    backgroundColor: "#B8F8FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  photoButtonText: {
    color: "#120B2D",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#E6E0F0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#120B2D",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default ReportBug;
