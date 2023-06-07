import react from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Voltar(){
    const navigation = useNavigation();

    return(
       <TouchableOpacity
       onPress={()=> {navigation.goBack()}} 
       style={estilos.invisivel}>
            <Text style={estilos.texto} >Voltar</Text>
       </TouchableOpacity>
    )
}

const estilos= StyleSheet.create ({
    invisivel:{
        backgroundcolor: "#B0392C",
        width: 60,
        height: 20,
        marginLeft: 20
    },

    texto:{
        fontSize: 16,
        lineHeight: 20,
        color: "#FFD3CF"
    }
})

