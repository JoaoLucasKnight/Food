import react from "react";
import { Text, TouchableOpacity , StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native'; 

export default function Proximo(){
const navigation = useNavigation();

    return(
       <TouchableOpacity
        onPress={()=> {navigation.navigate("Perfil")}} 
        style={estilos.invisivel}>
            <Text style={estilos.texto} >Proximo</Text>
       </TouchableOpacity>
    )
}

const estilos= StyleSheet.create ({
    invisivel:{
        backgroundcolor: "#B0392C",
        width: 60,
        height: 20,
        marginRight: 20
    },

    texto:{
        fontSize: 16,
        lineHeight: 20,
        color: "#FFD3CF"
    }
})