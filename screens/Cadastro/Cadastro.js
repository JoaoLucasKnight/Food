import react from "react";
import { Text, View, StyleSheet} from "react-native";
import HeaderCad from "../../components/Headers/HeaderCad";

export default function Cadastro(){
    return(
             <View style={estilos.frame}>
                <HeaderCad/>
                <Text style={estilos.texto}> Eis Aqui um formularios</Text>
            </View>
)};

const estilos = StyleSheet.create({
    frame: {
      height: "100%",
      backgroundColor: '#B0392C',
      paddingTop: 35,
    },

    texto:{
        fontSize:32,
        color: "white",
        lineHeight: 800,
        
    }
});    