import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Contact({ navigation }) {
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

      <View style={styles.headerIcons}>
        <View style={styles.iconContainer}>
          {/* <Image
            source={require("./assets/contact_pro.png")}
            style={styles.icon}
          /> */}
          <Text style={styles.headerText}>Contact Pro</Text>
        </View>
        <View style={styles.iconContainer}>
          {/* <Image
            source={require("./assets/emergency_numbers.png")}
            style={styles.icon}
          /> */}
          <Text style={styles.headerText}>Numéros D'urgence</Text>
        </View>
      </View>

      <View style={styles.contactList}>
        <TouchableOpacity style={styles.contactButton}>
          <Image
            source={require("../assets/doctolib.png")}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>Doctolib</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Image
            source={require("../assets/mondocteur.png")}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>Mondocteur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Image
            source={require("../assets/therapeutes.jpeg")}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>Therapeute.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Image source={require("../assets/resalib.png")} style={styles.logo} />
          <Text style={styles.buttonText}>Resalib</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
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
  icon: {
    width: 50,
    height: 50,
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  contactList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7259E4",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
