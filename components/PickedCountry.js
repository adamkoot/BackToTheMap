import React, { Component } from "react";
import { StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from '@react-navigation/native';
import data from "../data.json";
export default function Map() {
    const route = useRoute()
    console.log(route.params.country.latitude, route.params.country.longitude)
  return (
    <MapView
    style={{ flex: 1 }}
    showsCompass={false}
    orientation={false}
    initialRegion={{
      latitude: route.params.country.latitude,
      longitude: route.params.country.longitude,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    }}
    >
    </MapView>
  );
}

