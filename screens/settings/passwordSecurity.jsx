import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const PasswordSecurity = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

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
        <Text style={styles.title}>Mot de passe et sécurité</Text>

        <View style={styles.formGroup}>
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mot de passe actuel</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Entrez votre mot de passe actuel"
              placeholderTextColor="#E6E0F0"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Ionicons
            name="lock-open-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nouveau mot de passe</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Entrez un nouveau mot de passe"
              placeholderTextColor="#E6E0F0"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmez le mot de passe</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirmez votre nouveau mot de passe"
              placeholderTextColor="#E6E0F0"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Changer le mot de passe</Text>
        </TouchableOpacity>

        <View style={[styles.formGroup, styles.twoFactorGroup]}>
          <Ionicons
            name="shield-checkmark-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Authentification à deux facteurs</Text>
            <Switch
              value={isTwoFactorEnabled}
              onValueChange={setIsTwoFactorEnabled}
              style={styles.switch}
            />
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  twoFactorGroup: {
    marginBottom: 0,
  },
  label: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#1c1c3a",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#3F317E",
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#B8F8FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
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
  switch: {
    marginLeft: 10,
  },
});

export default PasswordSecurity;
