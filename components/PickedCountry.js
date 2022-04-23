import React, { Component } from "react";
import { StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import data from "../data.json";
export default function Map() {
  return (
    <MapView
    style={{ flex: 1 }}
    showsCompass={false}
    orientation={false}
    // initialRegion={{
    //   latitude: 52.141103,
    //   longitude: 20.111,
    //   latitudeDelta: 3,
    //   longitudeDelta: 3,
    // }}
    >
    </MapView>
  );
}

