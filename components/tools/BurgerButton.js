import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import hamburger from "../../assets/icons/hamburger.png";

export default function MapScreen() {
  return (
    <View style={styles.floatingButton}>
      <TouchableOpacity>
      {/* onPress={() => navigation.openDrawer() pokmin cos z ta funkcja */}
        <Image source={hamburger} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 1000,
    backgroundColor: "#00305b",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
