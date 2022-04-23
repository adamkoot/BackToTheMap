import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import hamburger from "../../assets/icons/hamburger.png";
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => { navigation.openDrawer(); console.log(navigation) }} style={styles.floatingButton}>
        <Image source={hamburger} style={{width:32, height:32}}/>
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
    width: 64,
    height: 64,
    borderRadius: 32,
    zIndex: 1000,
    backgroundColor: "#00305b",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00305b",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.21,
    shadowRadius: 6.65,
    elevation: 9
  },
});
