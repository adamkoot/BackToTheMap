import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from "react-native-maps";


export default function Map() {
  return (
    <MapView
    style={{ flex: 1 }}
    initialRegion={{
        latitude: 50.111,
        longitude: 20.111,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    }}
    >
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
});
