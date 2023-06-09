import react from "react";
import { Text, TouchableOpacity , StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native'; 

export default function invisivel(props){
const navigation = useNavigation();

    return(
       <TouchableOpacity
        onPress={()=> 
            {if(props.name == 'Salvar'){
               return (navigation.navigate('Perfil'));
                 } else if(props.name == 'Voltar') {
                    return(navigation.goBack());
                }
            }       
        } 
        style={estilos.invisivel}>
            <Text style={estilos.texto} >{props.name}</Text>
       </TouchableOpacity>
    )
}

const estilos= StyleSheet.create ({
    invisivel:{
        backgroundcolor: "#B0392C",
        width: 60,
        height: 20,
        
    },

    texto:{
        fontSize: 16,
        lineHeight: 20,
        color: "#FFD3CF",
        textAlign: "center"
    }
})