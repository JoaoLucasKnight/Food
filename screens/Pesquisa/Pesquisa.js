import react from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import FooterPesquisa from "../../components/Footers/FooterPesquisa";
import Cartao from "../../components/Cartao/Cartao";
import ListaCartao from "../../components/Listas/ListaCartao";

export default function Pesquisa(){
    return(
        <View style={estilos.frame}>
            <TextInput placeholder="Pesquisa" placeholderTextColor={"#7D291F"} style={estilos.input}/>

            <View style={estilos.box}>
                <FlatList
                    data={ListaCartao}
                    renderItem={({item})=> <Cartao{...item}/>}
                />
            </View>

            <FooterPesquisa/>
        </View>
    )   
};

const estilos = StyleSheet.create({
    frame: {
        height: "100%",
        backgroundColor: '#B0392C',
        paddingTop: 55,
      },

    input:{
        width: "auto",
        height: 40,
        backgroundColor: "#FFD3CF",
        borderRadius: 12,
        borderWidth:2,
        borderColor:"#7D291F" ,
        paddingHorizontal: 16,
        marginHorizontal: 16,
        marginBottom: 16
    },
    box:{
        paddingHorizontal: 16,
        marginBottom: 110,
    }
})