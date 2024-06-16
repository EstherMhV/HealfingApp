import Menu from "../components/Menu.jsx";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const Chargement = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const textAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(textAnim, {
          toValue: 10,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(textAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim, textAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.Image
          source={require("../assets/logo.png")}
          style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
        />
        <Animated.Text
          style={[
            styles.loadingText,
            { transform: [{ translateY: textAnim }] },
          ]}
        >
          Chargement ...
        </Animated.Text>
      </View>
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
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  loadingText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default Chargement;
