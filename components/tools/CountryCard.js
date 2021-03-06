import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import poland from "../../assets/icons/flags/poland.png";
import sweden from "../../assets/icons/flags/sweden.png";
import iran from "../../assets/icons/flags/iran.png";
import italy from "../../assets/icons/flags/italy.png";
import latvia from "../../assets/icons/flags/latvia.png";
import russia from "../../assets/icons/flags/russia.png";
import turkey from "../../assets/icons/flags/turkey.png";
import ukraine from "../../assets/icons/flags/ukraine.png";
import { useNavigation } from "@react-navigation/native";
import i18n from "../../i18n";

export default function CountryCard(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("Country Map", {
            country: props.country,
            index: props.index,
          });
        }}
      >
        <View>
          <GetPhoto photo={props.country} />
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            {props.country}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
function GetPhoto(props) {
  if (props.photo == "Sweden") {
    return <Image style={styles.photo} source={sweden}></Image>;
  } else if (props.photo == "Poland") {
    return <Image style={styles.photo} source={poland}></Image>;
  } else if (props.photo == "Italy") {
    return <Image style={styles.photo} source={italy}></Image>;
  } else if (props.photo == "Turkey") {
    return <Image style={styles.photo} source={turkey}></Image>;
  } else if (props.photo == "Iran") {
    return <Image style={styles.photo} source={iran}></Image>;
  } else if (props.photo == "Latvia") {
    return <Image style={styles.photo} source={latvia}></Image>;
  } else if (props.photo == "Russia") {
    return <Image style={styles.photo} source={russia}></Image>;
  } else if (props.photo == "Ukraine") {
    return <Image style={styles.photo} source={ukraine}></Image>;
  }
}

const styles = StyleSheet.create({
  photo: {
    width: 96,
    height: 96,
  },
  card: {
    width: "40%",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 139, 156)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
