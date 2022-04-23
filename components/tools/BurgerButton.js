import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import hamburger from "../../assets/icons/hamburger.png";
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => { navigation.openDrawer(); console.log(navigation) }} style={styles.floatingButton}>
        <Image source={hamburger} />
    </TouchableOpacity>

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
