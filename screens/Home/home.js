import React from "react";
import Button from "../../components/Button";
import { View, StyleSheet, Image } from "react-native";
import Logo from "../../assets/logo.png"


export default function Home() {
    return<>
        <View style={estilos.frame}>
            <View style={estilos.div1}>
                <Image source={Logo} style={estilos.logo}></Image>
            </View>

            <View style={estilos.div2}>
            
                <Button />
                <Button />
            </View>
        </View>
    </>
};

const estilos = StyleSheet.create({
    frame: {
      flexDirection: "column",
      width: "100%",
      height: "100%",
      backgroundColor: '#B0392C',
      borderRadius: 16,
      paddingTop: 50,
      paddingLeft: 10,
    },

    div1:{
        flex:1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    div2:{
        flex:1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
  
    logo:{
        justifyContent: "flex-end",
        alignItems: "center",
        width: 200,
        height: 157,
  },

    
  })