import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BurgerButton from "./tools/BurgerButton";
import CountryCard from "./tools/CountryCard";
import DATA from "../data.json"
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View>
        <BurgerButton />
        <View>
          <Text>License info</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
