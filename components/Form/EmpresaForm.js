import React from "react";
import { StyleSheet, Text, TextInput, ScrollView, View } from "react-native";

export default function EmpresaForm(){
    return(
        <ScrollView style={estilos.container} >
            <Text style={estilos.texto} >Nome Fantasia</Text>
            <TextInput style={estilos.input} />

            <Text style={estilos.texto} >Razão</Text>
            <TextInput style={estilos.input} />

            <Text style={estilos.texto} >CNPJ</Text>
            <TextInput style={estilos.input} />

            <Text style={estilos.texto} >E-mail</Text>
            <TextInput style={estilos.input} />

            <Text style={estilos.texto} >Telefone</Text>
            <TextInput style={estilos.input} />

            <Text style={estilos.texto} >Senha</Text>
            <TextInput style={estilos.input} />

            <Text style={estilos.texto} >Confirma Senha</Text>
            <TextInput style={estilos.input} />

            <Text style={estilos.texto} >Localização</Text>
            <TextInput style={estilos.input} />

            <View style={estilos.container2} > 

               <View style={estilos.box}  >
                    <Text style={estilos.texto} >Endereço</Text>
                    <TextInput style={estilos.input2} />
               </View>

               <View style={estilos.box}  >
                    <Text style={estilos.texto} >CEP</Text>
                    <TextInput style={estilos.input2} />
               </View>

               <View style={estilos.box}  >
                    <Text style={estilos.texto} >Numero</Text>
                    <TextInput style={estilos.input2} />
               </View>

               <View style={estilos.box}  >
                    <Text style={estilos.texto} >Cidade</Text>
                    <TextInput style={estilos.input2} />
               </View>

               <View style={estilos.box}  >
                    <Text style={estilos.texto} >Bairro/Distrito</Text>
                    <TextInput style={estilos.input2} />
               </View>

               <View style={estilos.box}  >
                    <Text style={estilos.texto} >UF</Text>
                    <TextInput placeholder="Distrito Federal" style={estilos.input2} />
               </View>

                <Text style={estilos.texto} >Complemento</Text>
                <TextInput style={estilos.input} /> 
                
            </View>

        </ScrollView>

    )

};

const estilos = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingBottom: 60,
    },
    texto:{
        width: "auto",
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

    },

    container2:{
        flexDirection: "row",
        flexWrap: "wrap"
    },

    box:{
        width: "50%",
        flexDirection: "column",
    },

    input2:{
        width: "90%",
        borderRadius: 8,
        height: 32,
        backgroundColor: "#FFD3CF",
        marginBottom: 12,
        paddingHorizontal: 5,

    },
    texto2:{
       
        fontSize: 18,
        color: "#FFD3CF"
    }

});