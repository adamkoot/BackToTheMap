import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Map from "./Map.js";
import BurgerButton from "./tools/BurgerButton";
import hamburger from "../assets/icons/hamburger.png";
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Map />
      <BurgerButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
