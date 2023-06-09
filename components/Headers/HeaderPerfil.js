import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import gael from "../../assets/Cartao/Avatar.jpg"

export default function HeaderPerfil(){
    return<>
        <View style={estilos.container}>
            <View style={estilos.boxAvatar} >
                    <Image source={gael} style={estilos.imagem} />
            </View>

            <View style={estilos.boxStatus} >
                <Text style={estilos.titulo} >Gael Knight</Text>
                <Text style={estilos.titulo2} >Apaixonado por Churrasco </Text>
                <View style={estilos.conex}>    
                    <Text style={estilos.conexTexto} >1896 Seguindo</Text>
                    <Text style={estilos.conexTexto}>580 Seguidores</Text>
                    <Text style={estilos.conexTexto}>98 Restaurantes</Text>
                </View>
            </View>
        </View>

        <View style={estilos.countainerNav}  >
            <TouchableOpacity> 
                <Text style={estilos.titulo3} > Avaliações </Text>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Text style={estilos.titulo3} > Recomendados </Text>
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
        borderWidth: 3,
        borderColor: "#FC523F",
        backgroundColor: "#B0392C" 

    },

    titulo:{
        alignSelf: "center",
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 800,
        color: "#7D291F"

    },
    titulo2:{
        alignSelf: "center",
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 500,
        color: "#7D291F"

    },
    titulo3:{
        alignSelf: "center",
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 700,
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