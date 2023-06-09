import react from "react";
import {  View, StyleSheet} from "react-native";
import HeaderCad from "../../components/Headers/HeaderCad";
import Avatar from "../../components/Form/Avatar";
import EmpresaForm from "../../components/Form/EmpresaForm";

export default function CadastroEmpresa(){
    return(
             <View style={estilos.frame}>
                <HeaderCad/>
                <Avatar/>
                <EmpresaForm/>
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