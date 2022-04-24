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
      <Text style={[styles.title]}>{rowData.title}</Text>
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
  // const [cityInfo, setCityInfo] = useState(null);

  //component did mount ale nie jestem pewnien czy dobrze, bo trzeba pobierac dane za kazdym odswierzeniem ekranu
  useEffect(() => {
    // setCityInfo("Krakow");
    // console.log(cityInfo);
    //odebranie nazwy miasta z Map.js
    const { city } = route.params;
    console.log(city);

    //i tutaj trzeba pobrac jsona, zparsować i wpierdolic do stejtu
    //fetch itd https://markow.pl/coding_da_vinci/action.php?city={city}
  }, []);

  //i tutaj forem wpierdolic nasze pobrane dane z fetcha - ze stejtu do tej tablicy

  const data = [
    { time: "09:00", title: "Event 1", description: "Event 1 Description" },
    { time: "10:45", title: "Event 2", description: "Event 2 Description" },
    { time: "12:00", title: "Event 3", description: "Event 3 Description" },
    { time: "14:00", title: "Event 4", description: "Event 4 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
  ];

  return (
    <View style={styles.container}>
      <BurgerButton view={"burger"} />
      <View style={styles.list}>
        <Timeline
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#ff9797",
            color: "white",
            borderRadius: 13,
          }}
          renderDetail={renderDetail}
          data={data}
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
