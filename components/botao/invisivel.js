import react from "react";
import { Text, TouchableOpacity , StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native'; 

export default function Invisivel(props){
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
        >
            <Text style={estilos.texto} >{props.name}</Text>
       </TouchableOpacity>
    )
}

const estilos= StyleSheet.create ({
    texto:{
        fontSize: 20,
        color: "#FFD3CF",
        textAlign: "center"
    }
})