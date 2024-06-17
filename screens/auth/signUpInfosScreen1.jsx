import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUpInfosScreen1 = ({ route }) => {
  const navigation = useNavigation();
  const { email, password } = route.params || { email: "", password: "" };
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState("");

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setBirthdate(currentDate);
  };

  const createAccount = () => {
    if (!email || !username) {
      Alert.alert("Erreur", "Email et nom d'utilisateur sont requis.");
      return;
    }

    fetch("https://healfing-68534dd214c6.herokuapp.com/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        gender: gender,
        birthdate: birthdate,
        role: "user",
        xp: 0,
        level: 1,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const err = await response.json();
          throw new Error(
            "Une erreur s'est produite lors de la création du compte: " +
              (err.message || response.statusText)
          );
        }
      })
      .then((data) => {
        console.log("Utilisateur enregistré avec succès !", data);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'enregistrement des données utilisateur :",
          error
        );
        Alert.alert("Erreur", error.message);
      });
  };

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Dernière étape</Text>
        <Text style={styles.headerText}>
          Rempli le formulaire ci-dessous pour terminer ton inscription
        </Text>

        <Text style={styles.label}>Renseigne ta date de naissance !</Text>
        <View style={styles.inputContainer}>
          <DateTimePicker
            testID="dateTimePicker"
            mode="date"
            is24Hour={true}
            display="spinner"
            value={birthdate}
            onChange={handleDateChange}
            style={styles.datePicker}
          />
        </View>

        <Text style={styles.label}>Quel est ton pseudo ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="#E6E0F0"
            style={styles.input}
            placeholder="Ton pseudo"
            onChangeText={setUsername}
            value={username}
          />
        </View>

        <Text style={styles.label}>Quel est ton genre ?</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            style={styles.picker}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Femme" value="femme" />
            <Picker.Item label="Homme" value="homme" />
            <Picker.Item label="Autre" value="autre" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={createAccount}>
          <Text style={styles.buttonText}>Créer un Compte</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#3F317E",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerText: {
    alignItems: "center",
    marginBottom: 20,
    color: "#E6E0F0",
    fontSize: 18,
    textAlign: "center",
  },
  label: {
    color: "#E6E0F0",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
    color: "#E6E0F0",
    width: "100%",
  },
  pickerContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    justifyContent: "center",
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#E6E0F0",
  },
  datePicker: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    padding: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#120B2D",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUpInfosScreen1;
