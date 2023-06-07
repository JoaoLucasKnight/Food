import React from "react"
import HeaderPerfil from "../../components/Headers/HeaderPerfil"
import FooterHome from "../../components/Footers/FooterHome"
import { StyleSheet, View } from "react-native"


export default function Perfil(){
    return(
        <View style={estilos.frame} >
            <HeaderPerfil/>
            <FooterHome/>
        </View>
    )
};

const estilos = StyleSheet.create ({
    frame: {
        height: "100%",
        backgroundColor: '#B0392C',
      }
})