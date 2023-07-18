import react from "react";
// import * as Svg from 'react-native-svg';
import Logo from "../../assets/logoCompleta.png"
import { Image, View, StyleSheet } from "react-native";
import Invisivel from "../botao/Invisivel";

export default function HeaderCad (props){
    return(
        <View style={estilos.box}>
            <Invisivel name='Voltar' style={estilos.but} />
                    <Image source={Logo} style={estilos.logo}/> 
            <Invisivel name='Salvar' style={estilos.but} user={props}  />
        </View>
    )};

const estilos = StyleSheet.create ({
    box:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 120,
        paddingHorizontal: 18
    },

    logo:{
        height: 110,
        width: 78

    }
  
});