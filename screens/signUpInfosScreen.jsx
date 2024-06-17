import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUpInfosScreen = ({ route }) => {
  const navigation = useNavigation();
  const { email, password } = route.params;
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setDatePickerVisibility(Platform.OS === "ios");
    setBirthdate(currentDate);
  };

  const createAccount = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`birthdate: ${birthdate}, gender: ${gender}`);
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            const usersCollection = firestore().collection("users");
            usersCollection
              .doc(user.uid)
              .add({
                email: email,
                username: username,
                gender: gender,
                birthdate: birthdate,
                xp: 0,
                level: 1,
                profilePic:
                  "https://firebasestorage.googleapis.com/v0/b/healfing-53eb3.appspot.com/o/lH4rlDKb_400x400.jpg?alt=media&token=5d17bc46-ae80-4e19-90c2-a30eeb06b919",
                isPremium: false,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
              })
              .then(() => {
                console.log("Utilisateur enregistré avec succès !");
                navigation.navigate("Home");
              })
              .catch((error) => {
                console.error(
                  "Erreur lors de l'enregistrement des données utilisateur :",
                  error
                );
                Alert.alert(
                  "Erreur",
                  "Une erreur s'est produite lors de l'enregistrement des données utilisateur."
                );
              });
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error(
              "Erreur lors de la mise à jour du profil de l'utilisateur :",
              errorMessage
            );
            Alert.alert(
              "Erreur",
              "Une erreur s'est produite lors de la mise à jour du profil de l'utilisateur."
            );
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(
          "Erreur lors de la création de l'utilisateur :",
          errorMessage
        );
        Alert.alert(
          "Erreur",
          "Une erreur s'est produite lors de la création de l'utilisateur."
        );
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View>
          <Text style={styles.titles}>Dernière étape</Text>
          <Text style={styles.titles}>
            Rempli le formulaire ci-dessous pour terminer ton inscription
          </Text>
        </View>
        <View>
          <Text style={styles.titles}>Renseigne ta date de naissance !</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={showDatePicker}>
              <Text>Date !</Text>
            </TouchableOpacity>
            <DateTimePicker
              testID="dateTimePicker"
              mode="date"
              is24Hour={true}
              display="spinner"
              value={birthdate}
              onChange={handleDateChange}
            />
          </View>
          <Text style={styles.titles}>Quel est ton pseudo ?</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor="#E6E0F0"
              style={styles.input}
              placeholder="Ton pseudo"
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <Text style={styles.titles}>Quel est ton genre ?</Text>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={gender}
              style={{ height: 50, width: 150, color: "#E6E0F0" }}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Femme" value="femme" />
              <Picker.Item label="Homme" value="homme" />
              <Picker.Item label="Autre" value="autre" />
            </Picker>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={createAccount}>
        <Text style={styles.buttonText}>Creer un Compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#3F317E",
    justifyContent: "center",
  },
  titles: {
    alignItems: "center",
    marginBottom: 20,
    color: "#E6E0F0",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#E6E0F0",
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

export default SignUpInfosScreen;
