import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import BurgerButton from "./BurgerButton";

function renderDetail(rowData, sectionID, rowID) {
  let title = (
    <TouchableOpacity
      onPress={() => {
        //tu po kliku w tytul na osi czasu, powinno nam pokazac stara mape czy tam nalozyc na obecna mape
        console.log("przechodzimy do mapki i pokazujemy miasst");
      }}
    >
      <Text>{rowData.title}</Text>
    </TouchableOpacity>
  );
  var desc = null;
  if (rowData.description) desc = <Text>{rowData.description} dupa</Text>;
  return (
    <View style={{ flex: 1 }}>
      {title}
      {desc}
    </View>
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

  var ldata = [{ title: year, description: "Event 1 Description", time: year }];

  return (
    <View style={styles.container}>
      <BurgerButton view={"mainScreen"} />
      <View style={styles.list}>
        <Timeline
          data={ldata}
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
    top: 250,
    left: 80,
  },
});
