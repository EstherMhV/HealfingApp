import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const ActivityHistory = ({ navigation }) => {
  const activities = [
    { date: "2024-06-15", description: "Méditation de 10 minutes" },
    { date: "2024-06-14", description: "Relaxation musculaire" },
    { date: "2024-06-13", description: "Respiration profonde" },
  ];

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
        <Text style={styles.title}>Historique d'activité</Text>

        {activities.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <Text style={styles.activityDate}>{activity.date}</Text>
            <Text style={styles.activityDescription}>{activity.description}</Text>
          </View>
        ))}
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
  activityItem: {
    backgroundColor: "#1c1c3a",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  activityDate: {
    color: "#B8F8FF",
    fontSize: 14,
    marginBottom: 5,
  },
  activityDescription: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default ActivityHistory;
