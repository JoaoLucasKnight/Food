import react from "react";
import { StyleSheet, View,  Image, TextInput, TouchableOpacity, Text  } from "react-native";
import Logo from "../../assets/logoCompleta.png";
import ButVariacao from "../../components/botao/ButVariacao";
import { useNavigation } from '@react-navigation/native';


export default function Login(){
const navigation = useNavigation();
    return(
        <View style={estilos.frame}>
            <Image source={Logo} style={estilos.logo}/>
            <TextInput style={estilos.input} placeholder="Usuario ou E-mail" placeholderTextColor={"#7D291F"} />
            <TextInput style={estilos.input} placeholder="Senha" placeholderTextColor={"#7D291F"} secureTextEntry />
            <ButVariacao name="Logar"/>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Home')}}>
                <Text style={estilos.texto} >Não tenho Cadastro</Text>
            </TouchableOpacity>
        </View>
    )  
};

const estilos = StyleSheet.create({
    frame: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        backgroundColor: '#B0392C',
        paddingVertical: 85,
      },

    logo:{
        width: 350,
        height: 274,
        
    },

    input:{
        width: 300,
        height: 40,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: "#FFD3CF",
        color: "#7D291F"
    },
    texto:{
        color: "#FFD3CF",
        fontSize: 20,
        fontWeight: 200,

    }
});