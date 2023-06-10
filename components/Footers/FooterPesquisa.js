import React from "react";
import { View, StyleSheet,  TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

export default function FooterPesquisa(){
const navigation = useNavigation();

    return(
        <View style={estilos.box}  >
            <TouchableOpacity
            onPress={()=> navigation.navigate("Feed")}>
                <Feather name="home" size={32} color="#7D291F" />  
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialIcons name="add" size={32} color="#7D291F" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> navigation.navigate("Perfil")}>
                <MaterialIcons name="person-outline" size={32} color="#7D291F" />
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    box:{
        position: "absolute",
        bottom:0,

        flexDirection: "row",
        justifyContent: "space-around",
        heigh: 150,
        width: "100%",

        backgroundColor: "#FFD3CF",
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});