import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/homeScreen.jsx";
import Error404 from "./screens/error404.jsx";
import Login from "./screens/loginScreen.jsx";
import Diary from "./screens/diaryScreen.jsx";
import SignUp from "./screens/signUpScreen.jsx";
import Contact from "./screens/contactScreen.jsx";
import Profile from "./screens/profileScreen.jsx";
import Settings from "./screens/settingsScreen.jsx";
import AddDataDiary from "./screens/addDataDiary.jsx";
import PersonalData from "./screens/personalDataScreen.jsx";
import ArtTherapy from "./screens/exercices/ArtTherapyScreen.jsx";
import Meditation from "./screens/exercices/meditationScreen.jsx";
import CategoriesExercices from "./screens/categoriesExercices.jsx";
import Mindfulness from "./screens/exercices/MindfulnessScreen.jsx";
import DeepBreathing from "./screens/exercices/DeepBreathingScreen.jsx";
import MuscleRelaxation from "./screens/exercices/MuscleRelaxationScreen.jsx";
import SensoryAnchoring from "./screens/exercices/SensoryAnchoringScreen.jsx";
import AuditoryRelaxation from "./screens/exercices/AuditoryRelaxationScreen.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories List Exercises">
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
          <Stack.Screen
            name="Error 404"
            component={Error404}
            options={{ title: "Error" }}
          />
          <Stack.Screen
            name="Categories List Exercises"
            component={CategoriesExercices}
            options={{ title: "Catégories d'exercices" }}
          />
          <Stack.Screen
            name="Meditation"
            component={Meditation}
            options={{ title: "Méditation" }}
          />
          <Stack.Screen
            name="DeepBreathing"
            component={DeepBreathing}
            options={{ title: "Respiration profonde" }}
          />
          <Stack.Screen
            name="MuscleRelaxation"
            component={MuscleRelaxation}
            options={{ title: "Relaxation musclulaire" }}
          />
          <Stack.Screen
            name="Mindfulness"
            component={Mindfulness}
            options={{ title: "Pleine conscience" }}
          />
          <Stack.Screen
            name="SensoryAnchoring"
            component={SensoryAnchoring}
            options={{ title: "Ancrage sensorielle" }}
          />
          <Stack.Screen
            name="AuditoryRelaxation"
            component={AuditoryRelaxation}
            options={{ title: "Relaxation auditive" }}
          />
          <Stack.Screen
            name="ArtTherapy"
            component={ArtTherapy}
            options={{ title: "Art thérapie" }}
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
