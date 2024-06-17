import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef, useLayoutEffect } from "react";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Inscription</Text>
    </View>
  );
}

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToSignUpInfosScreen = () => {
    if (validateEmail() && validatePassword() && passwordsMatch()) {
      navigation.navigate("SignUpInfos", {
        email: email,
        password: password,
      });
    }
  };

  const validateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Email invalide");
      return false;
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Le mot de passe doit contenir au moins 6 caractères, une majuscule, un chiffre et un caractère spécial"
      );
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const passwordsMatch = () => {
    if (password !== passwordConfirm) {
      setPasswordError("Les mots de passe ne correspondent pas");
      return false;
    }
    return true;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#3F317E",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        marginLeft: 20,
      },
      headerTitle: "Inscription",
    });
  }, [navigation]);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            style={styles.input}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={30}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry={!passwordVisible}
            style={styles.input}
          />
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToSignUpInfosScreen}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkText}>Déjà un compte ? Connexion</Text>
        </TouchableOpacity>
        <Text style={styles.socialText}>Suivez nous sur :</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Ionicons name="logo-instagram" size={40} color="#f4fefe" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-facebook" size={40} color="#faf0e6" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#3F317E",
    justifyContent: "center",
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
    color: "#E6E0F0",
    marginVertical: 10,
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
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default SignUpScreen;
