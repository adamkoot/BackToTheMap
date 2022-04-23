import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import poland from "../../assets/poland.png";
import sweden from "../../assets/sweden.png";

export default function MapScreen(props) {
  console.log(props.photo);
  return (
    <TouchableOpacity
      style={styles.card}
      //   onPress={this.props.country}
    >
      <View>
        <GetPhoto photo={props.country} />
        <Text>{props.country}</Text>
      </View>
    </TouchableOpacity>
  );
}
function GetPhoto(props) {
  if (props.photo == "Sweden") {
    return <Image source={sweden}></Image>;
  } else {
    return <Image source={poland}></Image>;
  }
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
