import React from "react";
import { View, StyleSheet, Image} from "react-native";
import Invisivel from "../../components/botao/Invisivel";
import Logo from "../../assets/logoCompleta.png";
import ButConfig from "../../components/botao/ButConfig";

export default function Ajustes(){
    return<>
        <View style={estilos.frame}>
            <Invisivel name='Voltar'/>

            <View style={estilos.box}>
                <Image source={Logo} style={estilos.imagem}/>
                <ButConfig name='Alterar Cadastro'/>
                <ButConfig name='Notificação'/>
                <ButConfig name='Ajuda'/>
                <ButConfig name='Sair'/>
            </View>

        </View>
    </>
};

const estilos = StyleSheet.create({
    frame: {
      height: "100%",
      backgroundColor: '#B0392C',
      paddingVertical: 55,
      paddingHorizontal: 25
    },

    imagem:{
        width: 200,
        height: 200
    },

    box:{
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',

    }
});