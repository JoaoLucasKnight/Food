import React, { useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView, View } from "react-native";
import HeaderCad from "../Headers/HeaderCad";
import Avatar from "./Avatar";
export default function ClienteForm(){

const [nome, setNome] = useState ('');
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [telefone, setTelefone] = useState('');
const [senha, setSenha] = useState('');


    return<>
        <ScrollView style={estilos.box} >
            <HeaderCad
            nome={nome}
            user={user}
            email={email}
            telefone={telefone}
            senha={senha}
            />
            <Avatar/>
   
        
            <Text style={estilos.texto} >Nome</Text>
            <TextInput style={estilos.input}  value={nome} onChangeText={setNome} />
            <Text style={estilos.texto} >User</Text>
            <TextInput style={estilos.input} value={user} onChangeText={setUser} />
            <Text style={estilos.texto} >E-mail</Text>
            <TextInput style={estilos.input}  value={email} onChangeText={setEmail} />
            <Text style={estilos.texto} >Telefone</Text>
            <TextInput style={estilos.input} value={telefone} onChangeText={setTelefone} />
            <Text style={estilos.texto} >Senha</Text>
            <TextInput style={estilos.input} secureTextEntry />
            <Text style={estilos.texto} >Confirma Senha</Text>
            <TextInput style={estilos.input} value={senha} onChangeText={setSenha} secureTextEntry />
        </ScrollView>

    </>

};

const estilos = StyleSheet.create({
    box:{
        width: "100%",
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingBottom: 60,
        marginBottom: 16,
    },
    texto:{
        fontSize: 18,
        color: "#FFD3CF",
        paddingVertical: 8,
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