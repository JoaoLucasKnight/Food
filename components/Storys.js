import React from "react";
import Perfil from "./Perfil";
import { FlatList, StyleSheet, View } from "react-native";
import ListaStory from "./ListaStory";

export default function Storys(){
    return<>
        <View style={estilos.box}>
            <FlatList
                data={ListaStory}
                horizontal={true}
                renderItem={({item})=> <Perfil{...item}/> }
            /> 
        </View>

    </>
};

const estilos = StyleSheet.create ({
    box:{
        paddingHorizontal: 6,
    },
});