import react from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ButVariacao(props){
const navigation = useNavigation();
   return(
    <TouchableOpacity 
    onPress={()=>{navigation.navigate('Perfil')}}
    style={estilos.box} >
        <Text style={estilos.texto} >{props.name}</Text>
    </TouchableOpacity>
)};


const estilos = StyleSheet.create({
    box:{
        width: 150,
        height: 45,
        borderRadius: 24,

        backgroundColor: "#FFD3CF"
    },
    texto:{
        textAlign:"center",
        lineHeight: 45,
        color: "#7D291F",
        fontSize: 20,
        fontWeight: 500
    }
})