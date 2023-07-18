import react from "react";
import { Text, TouchableOpacity , StyleSheet, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import novoCliente from "../../servicos/users";

export default  function Invisivel(props){
const navigation = useNavigation();

    return(
       <TouchableOpacity
        onPress={async ()=> 
            {if(props.name == 'Salvar'){
                const resultado = await novoCliente(props.user.nome, props.user.user, props.user.email, props.user.telefone, props.user.senha)
                console.log(resultado)
                    if (resultado == 'sucesso'){
                        return (navigation.navigate('Perfil', {user: props.user.user}));
                    } else  if (resultado == 'erro'){
                        Alert.alert("Algo deu errado" )
                    }


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