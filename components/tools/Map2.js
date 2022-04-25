import React, { Component, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import data from "../../data.json";
import { useNavigation } from "@react-navigation/native";
import mapStyle from "../../mapStyle.json";

export default function Map2(props) {
  const [country, setCountry] = useState(props.index);
  const [latitude, setLatitude] = useState(data[props.index].latitude);
  const [longitude, setLongitude] = useState(data[props.index].longitude);
  const navigation = useNavigation();
  useEffect(() => {
    // setRegion({
    //     latitude: data[country].latitude,
    //     longitude: data[country].longitude,
    //     latitudeDelta: 10,
    //     longitudeDelta: 19,
    // })
    setCountry(props.index);
    setLatitude(data[country].latitude);
    setLongitude(data[country].longitude);
  });
  // useEffect(() => {
  //     setRegion({
  //         latitude: data[country].latitude,
  //         longitude: data[country].longitude,
  //         latitudeDelta: 10,
  //         longitudeDelta: 19,
  //     })
  // })
  let markers;
  markers = data[country].mapsCoords.map((country, index) => {
    return (
      <Marker
        key={index}
        coordinate={{
          latitude: country.latitude,
          longitude: country.longitude,
        }}
        onPress={() => {
          navigation.navigate("Timeline", { city: country.city });
          /**
           * TODO w onPress -> przekierowanie to timeline, przekaż w propsach info o miescie, navigation.navigate('Timeline', {params})
           */
        }}
      />
    );
  });
  return (
    <MapView
      style={{ flex: 1 }}
      mapStyle={mapStyle}
      showsCompass={false}
      zoomEnabled={true}
      region={{
        latitude,
        longitude,
        latitudeDelta: 10,
        longitudeDelta: 19,
      }}
    >
      {markers}
    </MapView>
  );
}
