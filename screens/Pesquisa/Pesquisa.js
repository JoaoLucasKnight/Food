import react from "react";
import { StyleSheet, View, TextInput } from "react-native";
import FooterPesquisa from "../../components/Footers/FooterPesquisa";

export default function Pesquisa(){
    return(
        <View style={estilos.frame}>
            <TextInput placeholder="Pesquisa" placeholderTextColor={"#7D291F"} style={estilos.input}/>
            <FooterPesquisa/>
        </View>
    )   
};

const estilos = StyleSheet.create({
    frame: {
        height: "100%",
        backgroundColor: '#B0392C',
        paddingVertical: 55,
      },

    input:{
        width: "auto",
        height: 40,
        backgroundColor: "#FFD3CF",
        borderRadius: 12,
        borderWidth:2,
        borderColor:"#7D291F" ,
        paddingHorizontal: 16,
        marginHorizontal: 16
    }
})