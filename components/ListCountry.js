import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BurgerButton from "./tools/BurgerButton";
import CountryCard from "./tools/CountryCard";
import DATA from "../data.json"
export default function MapScreen() {
  // const DATA = [
  //   {
  //     country: "Poland",
  //     latitude: 52.141103,
  //     longitude: 20.111,
  //   },
  //   {
  //     country: "Italy",
  //   },
  //   {
  //     country: "Turkey",
  //   },
  //   {
  //     country: "Iran",
  //   },
  //   {
  //     country: "Latvia",
  //   },
  //   {
  //     country: "Sweden",
  //   },
  //   {
  //     country: "Russia",
  //   },
  //   {
  //     country:"Ukraina"
  //   }
  // ];
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BurgerButton />
        <View style={styles.header}>
          <Text style={styles.headerText}>LIST OF COUNTRIES</Text>
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
  headerText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color:"#00305b",
    marginLeft: 40,
    marginTop: 6,
  },
  header: {
    top: 50,
  },
  list: {
    marginTop: 80,
    flex: 9,
    textAlign: "center",
  },
});
