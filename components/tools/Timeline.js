import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  Modal,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";
import BurgerButton from "./BurgerButton";
import i18n from "../../i18n";
import SingleImageZoomViewer from "react-native-single-image-zoom-viewer";

import links from "../../link.json";
import bijacz1 from "../../assets/cities/icons/bijacz1.png";
import bijacz2 from "../../assets/cities/icons/bijacz2.png";
import chocim2 from "../../assets/cities/icons/chocim2.png";
import elblag from "../../assets/cities/icons/elblag.png";
import isfahan from "../../assets/cities/icons/isfahan.png";
import kirholm from "../../assets/cities/icons/kirholm.png";
import konstantynopol from "../../assets/cities/icons/konstantynopol.png";
import krakow1 from "../../assets/cities/icons/krakow1.png";
import krakow2 from "../../assets/cities/icons/krakow2.png";
import krakow3 from "../../assets/cities/icons/krakow3.png";
import krakow4 from "../../assets/cities/icons/krakow4.png";
import krakow5 from "../../assets/cities/icons/krakow5.png";
import krakow6 from "../../assets/cities/icons/krakow6.png";
import krosno from "../../assets/cities/icons/krosno.png";
import lowicz from "../../assets/cities/icons/lowicz.png";
import maciejowice from "../../assets/cities/icons/maciejowice.png";
import moskwa from "../../assets/cities/icons/moskwa.png";
import obertyn from "../../assets/cities/icons/obertyn.png";
import olkusz from "../../assets/cities/icons/olkusz.png";
import poznan from "../../assets/cities/icons/poznan.png";
import raclawice from "../../assets/cities/icons/raclawice.png";
import ryga from "../../assets/cities/icons/ryga.png";
import sandomierz from "../../assets/cities/icons/sandomierz.png";
import szczekociny from "../../assets/cities/icons/szczekociny.png";
import torun1 from "../../assets/cities/icons/torun1.png";
import torun2 from "../../assets/cities/icons/torun2.png";
import wenecja from "../../assets/cities/icons/wenecja.png";

const windowWidth = Dimensions.get("window").width;
const photo_width = windowWidth * 0.75;
const createAlert = (text, auto) =>
  Alert.alert(`Author: ${auto}`, text, [
    { text: "Zamknij", onPress: () => console.log("OK Pressed") },
  ]);

function ReturnPhoto(param) {
  param = param.split(".");
  param = param[0];
  if (param == "krakow1") {
    return krakow1;
  } else if (param == "krakow2") {
    return krakow2;
  } else if (param == "krakow2") {
    return krakow3;
  } else if (param == "krakow3") {
    return krakow3;
  } else if (param == "krakow4") {
    return krakow4;
  } else if (param == "krakow5") {
    return krakow5;
  } else if (param == "krakow6") {
    return krakow6;
  } else if (param == "olkusz") {
    return olkusz;
  } else if (param == "bijacz1") {
    return bijacz1;
  } else if (param == "bijacz2") {
    return bijacz2;
  } else if (param == "poznan") {
    return poznan;
  } else if (param == "maciejowice") {
    return maciejowice;
  } else if (param == "krosno") {
    return krosno;
  } else if (param == "lowicz") {
    return lowicz;
  } else if (param == "elblag") {
    return elblag;
  } else if (param == "raclawice") {
    return raclawice;
  } else if (param == "szczekociny") {
    return szczekociny;
  } else if (param == "sandomierz") {
    return sandomierz;
  } else if (param == "torun1") {
    return torun1;
  } else if (param == "torun2") {
    return torun2;
  } else if (param == "wenecja") {
    return wenecja;
  } else if (param == "konstantynopol") {
    return konstantynopol;
  } else if (param == "isfahan") {
    return isfahan;
  } else if (param == "ryga") {
    return ryga;
  } else if (param == "kirholm") {
    return kirholm;
  } else if (param == "moskwa") {
    return moskwa;
  } else if (param == "chocim2") {
    return chocim2;
  } else if (param == "obertyn") {
    return obertyn;
  }
}

function renderDetail(rowData, sectionID, rowID) {
  // let image = <ReturnPhoto src={rowData["src"]} />;
  let title = (
    <>
      <TouchableOpacity
        onPress={() => {
          //tu po kliku w tytul na osi czasu, powinno nam pokazac stara mape czy tam nalozyc na obecna mape
          // console.log(rowData["src"]);
        }}
      >
        {/* komponent z biblioteki do zoomowania zdjecia - do zrobienia */}
        <SingleImageZoomViewer
          style={{
            resizeMode: "stretch",
            width: 200,
            height: 200,
          }}
          source={require("../../assets/cities/icons/bijacz1.png")}
          // source={require("../../assets/cities/icons/" + rowData["src"])}
        />
        {/* --------------------------------- */}

        <Image
          source={ReturnPhoto(rowData["src"])}
          style={{
            resizeMode: "stretch",
            width: photo_width,
            height: photo_width,
          }}
        />
        <Text style={{ fontSize: 17, marginBottom: 5 }}>
          Autor: {rowData["autor"]}
        </Text>
      </TouchableOpacity>
    </>
  );
  var desc = null;

  if (rowData["opis"]) {
    let text = rowData["opis"].substring(0, 100) + "...";
    desc = <Text>{text}</Text>;
  }
  return (
    <>
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          createAlert(rowData["opis"], rowData["autor"]);
        }}
      >
        <Text style={{ color: "white" }}>Czytaj dalej</Text>
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
    borderColor: "rgba(255,100,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00305B",
    borderRadius: 50,
    padding: 10,
    margin: 10,
    color: "white",
  },
});
