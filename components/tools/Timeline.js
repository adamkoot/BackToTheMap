import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import BurgerButton from "./BurgerButton";

const windowWidth = Dimensions.get("window").width;
const photo_width = windowWidth * 0.75;


function renderDetail(rowData, sectionID, rowID) {
  let title = (
    <>
      <TouchableOpacity
        onPress={() => {
          //tu po kliku w tytul na osi czasu, powinno nam pokazac stara mape czy tam nalozyc na obecna mape
          console.log("przechodzimy do mapki i pokazujemy miasst");
        }}
      >
        <Image
          source={{ uri: "https://markow.pl/coding_da_vinci/krakow1.png" }}
          style={{
            resizeMode: "stretch",
            width: photo_width,
            height: photo_width,
          }}
        ></Image>
        <Text>{rowData.title}</Text>
      </TouchableOpacity>
    </>
  );
  var desc = null;
  if (rowData.description) desc = <Text>{rowData.description}</Text>;
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
  const [cityInfo, setCityInfo] = useState("Krakow");
  const [info, setInfo] = useState([]);
  const [repo, setRepo] = useState([]);
  var data = [];
  useEffect(() => {
    const { city } = route.params;
    setCityInfo(city);
    console.log(cityInfo);

    axios
      .get(`https://markow.pl/coding_da_vinci/action.php?city=${city}`)
      .then((response) => {
        data = response.data;
        //setRepo(myRepo);
      });

    var pomoc = [];
    data.map((element) => {
      let temp = {
        time: element.data,
        title: element.nazwa,
        description: element.opis,
      };
      pomoc.push(temp);
    });
    //setInfo(pomoc);
    console.log(data);
    //setInfo((arr) => [...arr, pomoc]);
    //rconsole.log(info);
  });

  let year = "1232";

  var ldata = [
    { title: year, description: "Event 1 Description", time: year },
    { title: year, description: "Event 1 Description", time: year },
    { title: year, description: "Event 1 Description", time: year },
    { title: year, description: "Event 1 Description", time: year },
    { title: year, description: "Event 1 Description", time: year }
  ];

  return (
    <View style={styles.container}>
      <BurgerButton view={"mainScreen"} />
      <View style={styles.list}>
        <Timeline
          circleColor='#00305B'
          data={ldata}
          // isUsingFlatlist={false}
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
