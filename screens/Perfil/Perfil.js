import React from "react"
import HeaderPerfil from "../../components/Headers/HeaderPerfil"
import FooterHome from "../../components/Footers/FooterHome"
import { StyleSheet, View } from "react-native"
import CartaoAvalia from "../../components/Cartao/CartaoAvalia"


export default function Perfil({route,  navigation}){
    console.log(route.params.user)
    return(
        <View style={estilos.frame} >
            <HeaderPerfil nome={route.params.user}/>

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