import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import BurgerButton from "./BurgerButton";

import links from "../../link.json"

const windowWidth = Dimensions.get("window").width;
const photo_width = windowWidth * 0.75;


function renderDetail(rowData, sectionID, rowID) {
  let title = (
    <>
      <TouchableOpacity
        onPress={() => {
          //tu po kliku w tytul na osi czasu, powinno nam pokazac stara mape czy tam nalozyc na obecna mape
          console.log(rowData["src"]);
        }}
      >
        <Image
          source={{ uri: rowData["src"] }}
          style={{
            resizeMode: "stretch",
            width: photo_width,
            height: photo_width,
          }}
        ></Image>
        <Text>{rowData.tytul}</Text>
      </TouchableOpacity>
    </>
  );
  var desc = null;
  if (rowData["opis"]) desc = <Text>{rowData["opis"]}</Text>;
  return (
    <>
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
      <TouchableOpacity style={{ textAlign: "right" }}>
        <Text>Czytaj dalej</Text>
      </TouchableOpacity>
    </>
  );
}

export default function Timelinee({ route, navigation }) {
  const [cityInfo, setCityInfo] = useState("");
  useEffect(async () => {
    const { city } = route.params;
    if(city!=cityInfo){
      setCityInfo(city)
    }
  });
  return (
    <View style={styles.container}>
      <BurgerButton view={"mainScreen"} />
      <View style={styles.list}>
        <Timeline
          circleColor='#00305B'
          data={links[cityInfo]}
          innerCircle={'dot'}
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#ff9797",
            color: "white",
            borderRadius: 13,
          }}
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
    marginBottom: 100
    // left: 80,
  },
});
