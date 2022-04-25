import i18n from "../i18n";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import logo from "../assets/backtothemap.png";
import CloseButton from "./tools/CloseButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const photo_width = windowWidth * 0.6;
const closeY = windowHeight * 0.1;
const closex = windowWidth * 0.1;

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={logo}
          style={{
            resizeMode: "stretch",
            width: photo_width,
            height: photo_width,
          }}
        ></Image>
        <View style={{ marginTop: closeY * 0.5, textAlign: "center" }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              padding: 3,
            }}
          >
            {i18n.t("LicenseInfo.source")}
          </Text>

          <Text style={styles.text}>{i18n.t("LicenseInfo.license")}</Text>
          <Text style={styles.text}>{i18n.t("LicenseInfo.authors")}</Text>
          <Text style={styles.text}>- Adam Kot</Text>
          <Text style={styles.text}>- Kacper Przełożny</Text>
          <Text style={styles.text}>- Paweł Słota</Text>
          <Text style={styles.text}>- Maksymilian Markow</Text>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: closeY, left: closex }}>
        <CloseButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAF4F6",
  },
  header: {
    flex: 1,
    marginTop: closeY,
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    margin: 10,
  },
});
