import React, { Component, useState } from "react";
import { StyleSheet, View } from "react-native";
import Map from "./tools/Map2.js";
import BurgerButton from "./tools/BurgerButton";

import { useRoute } from "@react-navigation/native";

export default function CountryMap() {
  const [buttonView, changeButtonView] = useState("list")
  const [scrolling, setScrolling] = useState(false)
  const route = useRoute();
  const changeView = (newView) => {
    changeButtonView(newView)
    if(newView=="burger") setScrolling(true)
    else setScrolling(false)
  }
  return (
    <View style={styles.container}>
      <Map change={changeView} scrolling={scrolling} country={route.params.country} index={route.params.index}/>
      <BurgerButton view={buttonView} change={changeView}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
