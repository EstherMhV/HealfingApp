import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { Timestamp, doc, getFirestore, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { app } from "../firebaseConfig";

const db = getFirestore(app);

const SignUpName = ({ route }) => {
  const { email, password } = route.params;
  const [username, setUsername] = useState("");
  const [gender, setGender ] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const navigation = useNavigation();

  const createAccount = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            // Une fois que le profil est mis à jour, ajoute les informations de l'utilisateur à la base de données
            const userDoc = doc(db, "users", user.uid);
            setDoc(userDoc, {
              email: email,
              username: username,
              bithday: birthDate,
              role: "user",
              XP: 0,
              level: 1,
              profilePic:
                "https://firebasestorage.googleapis.com/v0/b/bambou-5e77d.appspot.com/o/profilePictures%2FprofilePic.png?alt=media&token=cb84ae21-80db-4ebf-b85f-3f63271ba236",
              joinedAt: Timestamp.now(),
              isPremium: false,
              createdAt: Timestamp.now(),
              updatedAt: Timestamp.now(),

            })
              .then(() => {
                
                navigation.navigate("Loggin");
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
            console.error("Erreur lors de la mise à jour du profil :", error);
            Alert.alert(
              "Erreur",
              "Une erreur s'est produite lors de la mise à jour du profil."
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
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View >
          <Text style={styles.titles}>
            Dernière étape
          </Text>
          <Text style={styles.titles}>
            Rempli le formulaire ci-dessous pour terminer ton inscription
          </Text>
        </View>
        

          <Text style={styles.titles}>
            Renseigne ta date de naissance !
          </Text>
        <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor="#E6E0F0"
              style={styles.input}
              placeholder="Date de naissance"
              onChangeText={setBirthDate}
              value={birthDate}
            />
        </View>


            <Text style={styles.titles}>
              Quel est ton pseudo ?
            </Text>
          <View style={styles.inputContainer}>  
            <TextInput
              placeholderTextColor="#E6E0F0"
              style={styles.input}
              placeholder="Ton pseudo"
              onChangeText={setUsername}
              value={username}
            />
          </View>



            <Text  style={styles.titles}>
              Quel est ton genre ?
            </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor="#E6E0F0"
              style={styles.input}
              placeholder="Ton pseudo"
              onChangeText={setGender}
              value={gender}
            />
          </View>
          </View>
          <View className="w-full px-12 py-12 mt-56">
           
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}  onPress={createAccount}>Creer un Compte</Text>
            
          </TouchableOpacity>
          
          </View>
    </SafeAreaView>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
    resizeMode: "contain",
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
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#E6E0F0",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#B8F8FF",
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

  linkText: {
    color: "#fff",
    marginVertical: 10,
  },
  forgetPasswordsLink: {
    color: "#fff",
    marginVertical: 10,
    textDecorationLine: "underline",
  },
  socialText: {
    color: "#fff",
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
});

export default SignUpName;