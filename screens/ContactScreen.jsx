import { useState } from "react";
import Menu from "../components/Menu.jsx";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Contact = ({ navigation }) => {
  const [activeSection, setActiveSection] = useState(null);

  const renderContactPro = () => (
    <View style={styles.contactList}>
      <TouchableOpacity style={styles.contactButton}>
        <Image source={require("../assets/doctolib.png")} style={styles.logo} />
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
  );

  const renderEmergencyNumbers = () => (
    <View style={styles.contactList}>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}>SOS Suicide Phénix</Text>
        <Text style={styles.buttonText}>S01 45 39 40 00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}>SOS Amitié</Text>
        <Text style={styles.buttonText}>09 72 39 40 50</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}>Fil Santé Jeunes</Text>
        <Text style={styles.buttonText}>0 800 235 236</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}>SAMU</Text>
        <Text style={styles.buttonText}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}>Numéro européen d'urgence</Text>
        <Text style={styles.buttonText}>112</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack("homeScreen")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.headerIcons}>
        <TouchableOpacity
          onPress={() => setActiveSection("contactPro")}
          style={styles.iconContainer}
        >
          <Image source={require("../assets/pro.png")} style={styles.icon} />
          <Text style={styles.headerText}>Contact Pro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveSection("emergencyNumbers")}
          style={styles.iconContainer}
        >
          <Image source={require("../assets/sos.png")} style={styles.icon} />
          <Text style={styles.headerText}>Numéros D'urgence</Text>
        </TouchableOpacity>
      </View>

      {activeSection === "contactPro" && renderContactPro()}
      {activeSection === "emergencyNumbers" && renderEmergencyNumbers()}

      <Menu navigation={navigation} />
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
    width: 30,
    height: 30,
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

export default Contact;
