import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isSMSenabled, setIsSMSEnabled] = useState(false);

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
        <Text style={styles.title}>Paramètres de notification</Text>

        <View style={styles.formGroup}>
          <Ionicons
            name="mail-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Notifications par e-mail</Text>
            <Switch
              value={isEmailEnabled}
              onValueChange={setIsEmailEnabled}
              style={styles.switch}
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Notifications push</Text>
            <Switch
              value={isPushEnabled}
              onValueChange={setIsPushEnabled}
              style={styles.switch}
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Ionicons
            name="chatbox-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Notifications par SMS</Text>
            <Switch
              value={isSMSenabled}
              onValueChange={setIsSMSEnabled}
              style={styles.switch}
            />
          </View>
        </View>
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
  formGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  label: {
    color: "#fff",
  },
  icon: {
    marginRight: 10,
  },
  switch: {
    marginLeft: 10,
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default Notification;
