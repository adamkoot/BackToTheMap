import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import BurgerButton from "./tools/BurgerButton";
import logo from "../assets/backtothemap.png";
import CloseButton from "./tools/CloseButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const photo_width = windowWidth * 0.85;
const closeY = windowHeight * 0.1;
const closex = windowWidth * 0.1;
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={logo}
          style={{ resizeMode: "stretch", width: photo_width }}
        ></Image>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            padding: 3,
          }}
        >
          Data from: Archiwum Narodowe w Krakowie
        </Text>
        <Text style={styles.text}>License: CC0 1.0</Text>
        <Text style={styles.text}>Authors:</Text>
        <Text style={styles.text}>Adam Kot</Text>
        <Text style={styles.text}>Kacper Przełożny</Text>
        <Text style={styles.text}>Paweł Słota</Text>
        <Text style={styles.text}>Max Markov</Text>
      </View>
      <View style={{ position: "absolute", bottom: closeY, left: closex }}>
        <CloseButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAF4F6",
  },
  header: {
    flex: 1,
    marginTop: 150,
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 25,
    margin: 10,
  },
});
