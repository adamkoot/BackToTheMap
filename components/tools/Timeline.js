import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert
} from "react-native";
import Timeline from "react-native-timeline-flatlist";
import BurgerButton from "./BurgerButton";
import i18n from "../../i18n"
import links from "../../link.json";
import bijacz1 from "../../assets/cities/bijacz1-min.png";

const windowWidth = Dimensions.get("window").width;
const photo_width = windowWidth * 0.75;
const createAlert = (text,auto) =>
    Alert.alert(
      `Author: ${auto}`,
      text,
      [
        { text: "Zamknij", onPress: () => console.log("OK Pressed") }
      ]
    );
function renderDetail(rowData, sectionID, rowID) {
  let title = (
    <>
      <TouchableOpacity
        onPress={() => {
          //tu po kliku w tytul na osi czasu, powinno nam pokazac stara mape czy tam nalozyc na obecna mape
          // console.log(rowData["src"]);
        }}
      >
        <Image
          source={bijacz1}
          style={{
            resizeMode: "stretch",
            width: photo_width,
            height: photo_width,
          }}
        />
        <Text style={{ fontSize: 17, marginBottom: 5 }}>Autor: {rowData["autor"]}</Text>
      </TouchableOpacity>
    </>
  );
  var desc = null;

  if (rowData["opis"]) {
    let text = rowData["opis"].substring(0, 100) + "..."
    desc = <Text>{text}</Text>;
  }
  return (
    <>
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{createAlert(rowData["opis"],rowData["autor"])}}>
        <Text style={{color:"white"}}>Czytaj dalej</Text>
      </TouchableOpacity>
    </>
  );
}

export default function Timelinee({ route, navigation }) {
  const [cityInfo, setCityInfo] = useState("");
  useEffect(async () => {
    const { city } = route.params;
    if (city != cityInfo) {
      setCityInfo(city);
    }
  });
  return (
    <View style={styles.container}>
      <BurgerButton view={"mainScreen"} />
      <View style={styles.list}>
        <Timeline
          circleColor="#00305B"
          data={links[cityInfo]}
          innerCircle={"dot"}
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#ff9797",
            color: "white",
            borderRadius: 13,
          }}
          style={{ marginBottom: 100, padding: 10 }}
          renderDetail={renderDetail}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    top: 150,
    paddingBottom: 100,
    // left: 80,
  },
  button: {
    borderColor: 'rgba(255,100,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00305B',
    borderRadius: 50,
    padding:10,
    margin:10,
    color:"white"
  }
});
