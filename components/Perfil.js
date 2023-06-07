import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Perfil(){
    return<>
    <TouchableOpacity style={estilos.box}>
        <View style={estilos.Perfil}></View>
        <Text style={estilos.texto} > Nome </Text>
    </TouchableOpacity>
</>

};

const estilos = StyleSheet.create({
    box:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        width: 60
    },

    Perfil:{
        height: 55,
        width: 55,
        marginVertical: 10,
        backgroundColor: "#7D291F",
        borderRadius: 55/2,
        borderWidth: 1.5,
        borderColor: "#FFD3CF"
    },

    texto:{
        color: "#FFD3CF"
    }
});
