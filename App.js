import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import World from "./components/World.js";
import ListCountry from "./components/ListCountry";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="test" onPress={() => console.log("test")} />
      </DrawerContentScrollView>
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
        <Drawer.Screen name="MapScreen" component={World} />
        <Drawer.Screen name="List Country" component={ListCountry} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
