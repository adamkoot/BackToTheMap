import * as Localization from "expo-localization";
import i18n from "./i18n";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import World from "./components/World.js";
import CloseButton from "./components/tools/CloseButton";
import ListCountry from "./components/ListCountry";
import LicenseInfo from "./components/LicenseInfo";
import Timeline from "./components/tools/Timeline";
import BigPicture from "./components/BigPicture";
import CountryMap from "./components/CountryMap";
import Info from "./assets/icons/info.png";
import Map from "./assets/icons/map.png";
import List from "./assets/icons/list.png";
import Logo from "./assets/backtothemap.png";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import LanguageButton from "./components/tools/LanguageButton";
const Drawer = createDrawerNavigator();

export default function App() {
  const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const [language, setLanguage] = useState("");
    function changeLanguage(value) {
      i18n.locale = value;
      setLanguage(i18n.locale);
    }

    return (
      <View
        style={{
          height: "100%",
          backgroundColor: "#EAF4F6",
        }}
      >
        <View style={styles.menu}>
          <Image source={Logo} style={styles.photo} />
        </View>
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label={() => (
              <Text style={styles.drawerItem}>
                {i18n.t("AppComponent.countryList")}
              </Text>
            )}
            icon={() => <Image source={List} style={styles.icon}/>}
            onPress={() => navigation.navigate("List Country")}
          />
          <DrawerItem
            label={() => (
              <Text style={styles.drawerItem}>
                {i18n.t("AppComponent.map")}
              </Text>
            )}
            icon={() => <Image source={Map} style={styles.icon}/>}
            onPress={() => navigation.navigate("Map Screen")}
          />
          <DrawerItem
            label={() => (
              <Text style={styles.drawerItem}>
                {i18n.t("AppComponent.licenseInfo")}
              </Text>
            )}
            icon={() => <View style={styles.shadow}><Image source={Info} style={styles.icon}/></View>}
            onPress={() => navigation.navigate("License info")}
            style={{marginBottom:20,paddingBottom:20}}
          />
          <LanguageButton  changeLanguage={changeLanguage} />
        </DrawerContentScrollView>
        <CloseButton />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Map Screen" component={World} />
        <Drawer.Screen name="List Country" component={ListCountry} />
        <Drawer.Screen name="License info" component={LicenseInfo} />
        <Drawer.Screen name="Timeline" component={Timeline} />
        <Drawer.Screen name="BigPicture" component={BigPicture} />
        <Drawer.Screen name="Country Map" component={CountryMap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00305b",
    shadowColor: "#00305b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  drawerItem: {
    fontSize: 22,
    color: "#00305b",
  },
  photo: {
    width: "90%",
    height: "65%",
    resizeMode: "stretch",
  },
  icon:{
    width: 48,
    height: 48,
  },
  shadow:{
    shadowColor: "#00305b",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  }
});
