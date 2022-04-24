import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BurgerButton from "./tools/BurgerButton";
import CountryCard from "./tools/CountryCard";
import DATA from "../data.json";
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BurgerButton view={"burger"} />
        <View style={styles.header}>
          <Text style={styles.headerText}>COUNTRIES LIST</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <FlatList
          style={styles.list}
          data={DATA}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CountryCard
              country={item.country}
              photo={item.photo}
              keyExtractor={index}
              index={index}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4F6",
  },
  top: {
    flex: 0,
  },
  headerText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#00305b",
    marginLeft: 40,
    marginTop: 6,
  },
  header: {
    top: 50,
  },
  list: {
    marginTop: 80,
    flex: 1,
    textAlign: "center",
  },
});
