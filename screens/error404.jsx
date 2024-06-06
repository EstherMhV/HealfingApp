import Menu from "../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Error404 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={require("../assets/error.png")} style={styles.image} />
        <Text style={styles.errorMessage}>
          Désolé nous ne parvenons pas à acceder à cette page
        </Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  errorMessage: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Error404;
