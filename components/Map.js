import React, { Component, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import data from "../data.json";
import { useNavigation } from "@react-navigation/native";
export default function Map(props) {

  const [region, setRegion] = useState({
    latitude: 52.141103,
    longitude:  20.111,
    latitudeDelta: 1,
    longitudeDelta: 1,
  })
  let markers = data.map((country, index)=>{
    return (
      <Marker
      key={index}
      coordinate={{
        latitude: country.latitude,
        longitude: country.longitude,
      }}
      onPress={() => {
          setRegion({
            latitude: country.latitude,
            longitude:  country.longitude,
            latitudeDelta: 10,
            longitudeDelta: 12,
          })
          props.change("back")
      }}
    />
    )
  })
  return (
    <MapView
      style={{ flex: 1 }}
      showsCompass={false}
      zoomEnabled={props.scrolling}
      region={region}
      >
        {markers}
      </MapView>
  );
}
