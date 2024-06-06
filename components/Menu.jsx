import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Categories List Exercises")}
      >
        <Ionicons name="barbell-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Exercices</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("News")}
      >
        <Ionicons name="newspaper-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Actus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Diary")}
      >
        <Ionicons name="book-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Contact")}
      >
        <Ionicons name="call-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="person-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "#3E2E72",
  },
  menuItem: {
    alignItems: "center",
  },
});

export default Menu;
