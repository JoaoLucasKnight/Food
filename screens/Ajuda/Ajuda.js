import React from "react";
import HeaderCad from "../../components/Headers/HeaderCad";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Ajuda(){

    return(
    <View style={estilos.frame}>
        <HeaderCad/>
        <Text style={estilos.titulo}>Principais Duvidas</Text>

        <View style={estilos.box} >
            <View>
                <Text style={estilos.corpo}>> Como cadastrar os meus pratos</Text>
                <Text style={estilos.corpo}>> Como verificar avaliações</Text>
                <Text style={estilos.corpo}>> Como alterar dados</Text>
                <Text style={estilos.corpo}>> As avaliações são confiaveis</Text>
                <Text style={estilos.corpo}>> Meu e-mail de verificação não chega</Text>
                
            </View>
            <View style={estilos.box2}>
                <Text style={estilos.fim}> Ainda em dúvida?  Inicie um chat com nosso suporte em nosso whatsapp. </Text>
                <TouchableOpacity>
                    <FontAwesome5 name="whatsapp" size={56} color="#FFD3CF"/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)}

const estilos = StyleSheet.create({
    frame: {
      height: "100%",
      backgroundColor: '#B0392C',
      paddingVertical: 35,
      paddingHorizontal: 25
    },

    box:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        
    },

    titulo:{
        fontSize: 28,
        fontWeight: 500,
        color: "#FFD3CF",
        width: '100%',
        textAlign: "center",
        paddingBottom: 40
    },

    corpo:{
        fontSize: 24,
        fontWeight: 400,
        color: "#FFD3CF",
        width: '100%',
    },

    fim:{
        fontSize: 20,
        fontWeight: 300,
        color: "#FFD3CF",
        width: '100%',
        textAlign: "center",
        paddingVertical: 15

    },

    box2:{
        flexDirection:"column",
        alignItems: "center"

    }

});