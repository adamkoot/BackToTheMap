import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import data from "../data.json";
import { useNavigation } from "@react-navigation/native";
export default function Map() {
  const navigation = useNavigation()
  let markers = data.map((country, index)=>{
    return (
      <Marker
      keyExtractor={(index) => index.toString()}
      coordinate={{
        latitude: country.latitude,
        longitude: country.longitude,
      }}
      onPress={() => {
        navigation.navigate("Picked Country", {country})
      }}
    />
    )
  })
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
        {markers}
      </MapView>
  );
}
