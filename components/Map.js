import React, { Component, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import data from "../data.json";
import { useNavigation } from "@react-navigation/native";
export default function Map() {
  const [location, setLocation] = useState(null)
  const [latitudeDelta, setLatitudeDelta] = useState(1);
  const [longitudeDelta, setLongitudeDelta] = useState(1);
  const [view, setView] = useState("picking");
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
      }
    })();
  }, []);

  useEffect(async () => {
    const getPosition = async () => {
      const location = await Location.getCurrentPositionAsync();
      setLocation(location);
    };
    await getPosition()
}, [])
console.log(location)
  let markers = data.map((country, index)=>{
    return (
      <Marker
      key={index}
      coordinate={{
        latitude: country.latitude,
        longitude: country.longitude,
      }}
      onPress={() => {
      }}
    />
    )
  })
  return (
    <MapView
      style={{ flex: 1 }}
      showsCompass={false}
      orientation={false}
      initialRegion={{
        latitude: 50,
        longitude: 50,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      }}
      >
        {markers}
      </MapView>
  );
}
