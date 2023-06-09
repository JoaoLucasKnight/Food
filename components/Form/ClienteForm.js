import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ClienteForm(){
    return(
        <View style={estilos.box} >
            <Text style={estilos.texto} >Nome</Text>
            <TextInput style={estilos.input} />
            <Text style={estilos.texto} >User</Text>
            <TextInput style={estilos.input} />
            <Text style={estilos.texto} >E-mail</Text>
            <TextInput style={estilos.input} />
            <Text style={estilos.texto} >Telefone</Text>
            <TextInput style={estilos.input} />
            <Text style={estilos.texto} >Senha</Text>
            <TextInput style={estilos.input} />
            <Text style={estilos.texto} >Confirma Senha</Text>
            <TextInput style={estilos.input} />
        </View>

    )

};

const estilos = StyleSheet.create({
    box:{
        width: "100%",
        flex:1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 60,
    },
    texto:{
        fontSize: 18,
        color: "#FFD3CF"
    },
    input:{
        width: "100%",
        borderRadius: 8,
        height: 32,
        backgroundColor: "#FFD3CF",
        marginBottom: 12,
        paddingHorizontal: 5

    }
});