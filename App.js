import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/homeScreen.jsx";
import News from "./screens/newsScreen.jsx";
import Error404 from "./screens/error404.jsx";
import Login from "./screens/loginScreen.jsx";
import Diary from "./screens/diaryScreen.jsx";

import SignUp from "./screens/signUpScreen.jsx";
import SignUpInfos from "./screens/signUpInfosScreen.jsx";
import Contact from "./screens/contactScreen.jsx";
import Profile from "./screens/profileScreen.jsx";
import Settings from "./screens/settingsScreen.jsx";
import AddDataDiary from "./screens/addDataDiary.jsx";
import DailyMissions from "./screens/dailyMissions.jsx";
import Chargement from "./screens/chargementScreen.jsx";

import Exercice from "./screens/exercices/_id/exercice_id.jsx";
import ExerciceGo from "./screens/exercices/_id/exercice_go.jsx";
import ArtTherapy from "./screens/exercices/artTherapyScreen.jsx";
import Meditation from "./screens/exercices/meditationScreen.jsx";
import CategoriesExercices from "./screens/categoriesExercices.jsx";
import Mindfulness from "./screens/exercices/mindfulnessScreen.jsx";
import PersonalData from "./screens/settings/personalDataScreen.jsx";
import DeepBreathing from "./screens/exercices/deepBreathingScreen.jsx";
import PasswordSecurity from "./screens/settings/passwordSecurity.jsx";
import MuscleRelaxation from "./screens/exercices/muscleRelaxationScreen.jsx";
import SensoryAnchoring from "./screens/exercices/sensoryAnchoringScreen.jsx";
import AuditoryRelaxation from "./screens/exercices/auditoryRelaxationScreen.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PasswordSecurity">
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Inscription" }}
          />
          <Stack.Screen
            name="SignUpInfos"
            component={SignUpInfos}
            options={{ title: "Finalise ton inscription" }}
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
            name="DailyMissions"
            component={DailyMissions}
            options={{ title: "Missions quotidiennes" }}
          />
          <Stack.Screen
            name="Exercice"
            component={Exercice}
            options={{ title: "Exercice" }}
          />
          <Stack.Screen
            name="ExerciceGo"
            component={ExerciceGo}
            options={{ title: "Exercice go" }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{ title: "Actus" }}
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
            name="PasswordSecurity"
            component={PasswordSecurity}
            options={{ title: "Mot de passe et security" }}
          />
          <Stack.Screen
            name="personalData"
            component={PersonalData}
            options={{ title: "Informations personnelles" }}
          />
          <Stack.Screen
            name="Chargement"
            component={Chargement}
            options={{ title: "Chargement" }}
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
