import React from "react";
import logoN from "../../assets/logonome.png"
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function HeaderFeed() {
    return<>
        <View style={estilos.box} >
            <Image source={logoN} style={estilos.logo}/>

            <TouchableOpacity>
                <Ionicons name="settings-outline" size={32} color="#FFD3CF" />
            </TouchableOpacity>

        </View>
    </>
};

const estilos = StyleSheet.create({
    box: {
        height: 40,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 20,
        marginBottom: 10
        
    },

    logo:{
        width: 200,
        height: 32
    }
});