import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function MapScreen(props) {
  return (
    <TouchableOpacity
      style={styles.card}
      //   onPress={this.props.country}
    >
      <View>
        <Text>{props.country}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
});
