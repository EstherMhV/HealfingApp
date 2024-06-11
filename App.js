import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';


import Home from "./screens/homeScreen.jsx";
import Login from "./screens/loginScreen.jsx";
import Diary from "./screens/diaryScreen.jsx";
import SignUp from "./screens/signUpScreen.jsx";
import Contact from "./screens/contactScreen.jsx";
import Profile from "./screens/profileScreen.jsx";
import Settings from "./screens/settingsScreen.jsx";
import AddDataDiary from "./screens/addDataDiary.jsx";
import PersonalData from "./screens/personalDataScreen.jsx";
import DateTimePicker from '@react-native-community/datetimepicker';

AppRegistry.registerComponent(appName, () => App);
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Inscription" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Connexion" }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Diary"
            component={Diary}
            options={{ title: "Diary" }}
          />
          <Stack.Screen
            name="AddDataDiary"
            component={AddDataDiary}
            options={{ title: "Add data diary" }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ title: "Contact" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profil" }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ title: "Paramètres" }}
          />
          <Stack.Screen
            name="personalData"
            component={PersonalData}
            options={{ title: "Informations personnelles" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    backgroundColor: "#fff",
  },
});
