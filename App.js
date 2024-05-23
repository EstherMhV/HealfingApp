import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/HomeScreen.jsx";
import Login from "./screens/LoginScreen.jsx";
import SignUp from "./screens/SignUpScreen.jsx";
import Contact from "./screens/ContactScreen.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
            /> */}
            {/* <Stack.Screen
              name="Signup"
              component={SignUp}
              options={{ title: "Sign up" }}
            /> */}
            <Stack.Screen
              name="Contact"
              component={Contact}
              options={{ title: "Contact" }}
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
