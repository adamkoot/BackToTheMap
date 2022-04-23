import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import GoBack from "../../assets/icons/goBack.png";

export default function CloseButton() {
  const navigation = useNavigation()
  return (
    <View style={{justifyContent:"flex-end", alignItems:"flex-end"}}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image source={GoBack} style={{width: 40, height: 40, marginRight: 20, marginBottom: 20}} />
        </TouchableOpacity>
    </View>
  );
}

