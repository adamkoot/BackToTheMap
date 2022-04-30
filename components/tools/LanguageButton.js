import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import i18n from "../../i18n";

export default function LangSelector(props) {
  const [value, setSelectedValue] = useState("");
  function changeLanguage(value) {
    i18n.locale = value;
    setSelectedValue(i18n.locale);
  }

  return (
    <View style={styles.floatingButton}>
      <Picker
        style={{
          height: 50,
          width: 150,
          color: "white",
          justifyContent: "center",
        }}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => {
          props.changeLanguage(itemValue);
          setSelectedValue(itemValue);
        }}
      >
        <Picker.Item
          color="#00305b"
          label={"🇵🇱" + i18n.t("Language.poland")}
          value="pl"
        />
        <Picker.Item
          color="#00305b"
          label={"🇬🇧" + i18n.t("Language.england")}
          value="en"
        />
        <Picker.Item
          color="#00305b"
          label={"🇨🇿" + i18n.t("Language.czech")}
          value="cz"
        />
        <Picker.Item
          color="#00305b"
          label={"🇩🇪" + i18n.t("Language.deuchland")}
          value="de"
        />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    height: 60,
    marginBottom: 220,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "#00305b",
    color: "white",
    borderRadius: 32,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00305b",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
});
