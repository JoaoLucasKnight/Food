import react from "react";
import { Text, View, StyleSheet} from "react-native";
import HeaderCad from "../../components/Headers/HeaderCad";
import Avatar from "../../components/Form/Avatar";
import ClienteForm from "../../components/Form/ClienteForm";
export default function CadastroCliente(){
    return(
             <View style={estilos.frame}>
                <HeaderCad/>
                <Avatar/>
                <ClienteForm/>
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