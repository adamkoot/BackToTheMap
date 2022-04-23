import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BurgerButton from "./tools/BurgerButton";
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View>
        <BurgerButton view={"mainScreen"} />
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
