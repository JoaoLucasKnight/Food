import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HeaderPerfil(){
    return<>
        <View style={estilos.container}>
            <View style={estilos.boxAvatar} >
                <View style={estilos.imagem}  >

                </View>
            </View>

            <View style={estilos.boxStatus} >
                <Text style={estilos.titulo} >Nome Perfil</Text>
                <Text style={estilos.titulo} >Descrição</Text>
                <View style={estilos.conex}>    
                    <Text style={estilos.conexTexto} >Seguindo</Text>
                    <Text style={estilos.conexTexto}>Seguidores</Text>
                    <Text style={estilos.conexTexto}>Restaurantes</Text>
                </View>
            </View>
        </View>

        <View style={estilos.countainerNav}  >
            <TouchableOpacity> 
                <Text style={estilos.titulo} > Avaliações </Text>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Text style={estilos.titulo} > Recomendados </Text>
            </TouchableOpacity>
        </View>

        </>
};

const estilos = StyleSheet.create ({
    container:{
        flexDirection: "row",
        height: 155,
        backgroundColor: "#FFD3CF",
        paddingHorizontal: 8,
        paddingTop: 35,
        paddingBottom: 8
    },

    boxAvatar:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        
    },

    boxStatus:{
        flex: 5,
        flexDirection: "column",
        justifyContent: "space-around",
    },

    conex:{
        flexDirection: "row",
        justifyContent: "space-around"
    },

    imagem:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        borderWidth: 1.5,
        borderColor: "#FC523F",
        backgroundColor: "#B0392C" 

    },

    titulo:{
        alignSelf: "center",
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        color: "#7D291F"

    },

    conexTexto: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        color: "#7D291F"
    },

    countainerNav:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#FFD3CF",
    }
})