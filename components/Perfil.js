import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function Perfil({nome, logo}){
    return<>
    <TouchableOpacity style={estilos.box}>
        <View style={estilos.Perfil}>
            <Image source={logo} style={estilos.logo}/>
        </View>
        <Text style={estilos.texto} >{nome}</Text>
    </TouchableOpacity>
</>

};

const estilos = StyleSheet.create({
    box:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        marginHorizontal: 3
    },

    Perfil:{
        height: 55,
        width: 55,
        marginVertical: 10,
        backgroundColor: "#7D291F",
        borderRadius: 55/2,
        borderWidth: 1.5,
        borderColor: "#FFD3CF",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

       
    },

    texto:{
        width: "auto",
        color: "#FFD3CF",
        marginHorizontal: 12,
        marginBottom: 8

    },

    logo:{
        height: 45,
        width: 45,
        borderRadius: 55/2,
        borderWidth: 1.5,
        borderColor: "#FFD3CF"
    }
});
