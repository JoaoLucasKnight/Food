import react from "react";
// import * as Svg from 'react-native-svg';
import Logo from "../../assets/logoCompleta.png"
import { Image, View, StyleSheet } from "react-native";
import Proximo from "../botao/Proximo";
import Voltar from "../botao/Voltar";

export default function HeaderCad (){
    return(
        <View style={estilos.box}>
            <Voltar style={estilos.but} />
                    <Image source={Logo} style={estilos.logo}/> 
            <Proximo style={estilos.but}  />
        </View>
    )};

const estilos = StyleSheet.create ({
    box:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 110,
    },

    logo:{
        height: 110,
        width: 78

    }
  
});