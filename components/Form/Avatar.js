import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Avatar(){
    return <>
        <View style={estilos.box}  >
            <TouchableOpacity style={estilos.avatar}>
                
            </TouchableOpacity>

            <Text style={estilos.texto} >Bem-vindo ao nosso aplicativo !!!!</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    box:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 140,
        
      
    },

    avatar:{
        height: 120,
        width: 120,

        borderRadius: 120/2,
        borderWidth: 3,
        borderColor: "#7D291F",
        backgroundColor: "#FFD3CF"
    },
    
    texto:{
        fontSize: 24,
        width: "60%",
        color: "#FFD3CF",
        textAlign: "center"
        

        

    }
})

// alignSelf: "center",
// alignContent: "center"