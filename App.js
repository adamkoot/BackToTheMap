import { StyleSheet, Text, View, Button } from 'react-native';
import Map from "./components/Map.js"
import Mapbox, { Marker } from "react-native-maps";
import hamburger from "./assets/icons/hamburger.png"
export default function App() {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <View style={styles.container}>
    <View
        style={{
            position: 'absolute',
            top: 40, 
            left: 20,
            width: 50,
            height: 50,
            borderRadius: 25,
            zIndex: 1000,
            backgroundColor: "#00305b"
        }}
    >
        <Button title={""}/>
    </View>
      <Map/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 32,
    height: 32
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
});
