import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Menu({ navigation }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("Exercices")}
      >
        <Image
          source={require("../assets/exercices.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Exercices</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("Actus")}
      >
        <Image
          source={require("../assets/actus.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Actus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("Journal")}
      >
        <Image
          source={require("../assets/diary.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          source={require("../assets/contact.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("Profil")}
      >
        <Image
          source={require("../assets/profile.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#3E2E72",
  },
  menuButton: {
    alignItems: "center",
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
});
