import React from "react"
import HeaderPerfil from "../../components/Headers/HeaderPerfil"
import FooterHome from "../../components/Footers/FooterHome"
import { StyleSheet, View } from "react-native"
import CartaoAvalia from "../../components/Cartao/CartaoAvalia"


export default function Perfil(){
    return(
        <View style={estilos.frame} >
            <HeaderPerfil/>

            <View > 
                <CartaoAvalia/>
            </View>

            <FooterHome/>
        </View>
    )
};

const estilos = StyleSheet.create ({
    frame: {
        height: "100%",
        backgroundColor: '#B0392C',
      },
   
})