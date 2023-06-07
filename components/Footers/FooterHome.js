import React from "react";
import { View, StyleSheet,  TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

export default function FooterHome(){
const navigation = useNavigation();

    return(
        <View style={estilos.box}  >
            <TouchableOpacity
            onPress={()=> navigation.navigate("Feed")}>
                <MaterialCommunityIcons name="home-variant" size={32} color="#7D291F" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="add" size={38} color="#7D291F" />  
            </TouchableOpacity>

            <TouchableOpacity>
            <Ionicons name="search" size={32} color="#7D291F" />
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