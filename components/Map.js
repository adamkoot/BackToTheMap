import React, { Component, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import data from "../data.json";
export default function Map(props) {
  const [country, setCountry] = useState()
  const [region, setRegion] = useState({
    latitude: 52.141103,
    longitude:  20.111,
    latitudeDelta: 10.5,
    longitudeDelta: 12,
  })
  let markers;
  if(props.scrolling){
    markers = data.map((country, index)=>{
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
              longitudeDelta: 19,
            })
            props.change("back")
            setCountry(index)
        }}
      />
      )
    })
  }
  else{
    markers = data[country].mapsCoords.map((country, index)=>{
      return (
        <Marker
        key={index}
        coordinate={{
          latitude: country.latitude,
          longitude: country.longitude,
        }}
        onPress={() => {
          /**
           * TODO w onPress -> przekierowanie to timeline, przekaż w propsach info o miescie, navigation.navigate('Timeline', {params})
           */
        }}
      />
      )
    })
  }
  return (
    <MapView
      style={{ flex: 1 }}
      showsCompass={false}
      zoomEnabled={true}
      region={region}
      >
        {markers}
      </MapView>
  );
}
