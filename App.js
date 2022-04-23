import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import World from "./components/World.js";
import ListCountry from "./components/ListCountry";
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
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  const CustomDrawerContent = (props) => {
  const navigation = useNavigation()

    return (
      <View style={{
        height: '100%',
      }}>
        <View style={styles.menu}>
          <Image source={Logo}  style={styles.photo}/>
        </View>
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label={()=><Text style={styles.drawerItem}>Country list</Text>}
            icon={() => <Image source={List} />}
            onPress={() => navigation.navigate("List Country")}
          />
          <DrawerItem
            label={()=><Text style={styles.drawerItem}>Map</Text>}
            icon={() => <Image source={Map} />}
            onPress={() => navigation.navigate("MapScreen")}
  
          />
          <DrawerItem
            label={()=><Text style={styles.drawerItem}>License info</Text>}
            icon={() => <Image source={Info} />}
            onPress={() => {}}
          />
        </DrawerContentScrollView>
      </View>
    )
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

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: '25%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00305b",
    shadowColor: "#00305b",
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  drawerItem:{
    fontSize: 22,
    color: "#00305b",
  },
  photo:{
    width: "90%",
    height: "65%",
    resizeMode: 'stretch',
  }
})