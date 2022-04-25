import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Map from "./Map.js";
import BurgerButton from "./tools/BurgerButton";


export default function MapScreen() {
  const [buttonView, changeButtonView] = useState("burger");
  const [scrolling, setScrolling] = useState(true);
  const changeView = (newView) => {
    changeButtonView(newView);
    if (newView == "burger") setScrolling(true);
    else setScrolling(false);
  };
  return (
    <View style={styles.container}>
      <Map change={changeView} scrolling={scrolling} />
      <BurgerButton view={buttonView} change={changeView} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
