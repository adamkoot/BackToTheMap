import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BurgerButton from "./tools/BurgerButton";
import CountryCard from "./tools/CountryCard";

export default function MapScreen() {
  const DATA = [
    {
      country: "Poland",
    },
    {
      country: "Italy",
    },
    {
      country: "Turkey",
    },
    {
      country: "Iran",
    },
    {
      country: "Latvia",
    },
    {
      country: "Sweden",
    },
    {
      country: "Russia",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BurgerButton />
        <View style={styles.header}>
          <Text style={styles.header_text}>LIST OF COUNTRIES</Text>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={DATA}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CountryCard country={item.country} photo={item.photo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0,
  },
  header_text: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    top: 50,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 100,
    textAlign: "center",
  },
});
