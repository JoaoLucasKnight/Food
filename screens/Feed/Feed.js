import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderFeed from "../../components/Headers/HeaderFeed";
import FooterPerfil from "../../components/Footers/FooterPerfil";
import Storys from "../../components/Storys";
import Cartao from "../../components/Cartao";


export default function Feed(){
    return(
        <View style={estilos.frame} >
            <HeaderFeed/>
            <Storys/>

            <View style={estilos.box}>
                <Cartao/>
            </View>

            <FooterPerfil/>
        </View>
    )
};

const estilos = StyleSheet.create({
    frame: {
      height: "100%",
      backgroundColor: '#B0392C',
      paddingTop: 45
    },

    box:{
        paddingHorizontal: 16
    }
});