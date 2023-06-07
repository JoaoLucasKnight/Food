import React from "react";
import Perfil from "./Perfil";
import { StyleSheet, View } from "react-native";

export default function Storys(){
    return<>
        <View style={estilos.box}>
            <Perfil/>
            <Perfil/>
            <Perfil/>
            <Perfil/>
            <Perfil/> 
        </View>

    </>
};

const estilos = StyleSheet.create ({
    box:{
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
});