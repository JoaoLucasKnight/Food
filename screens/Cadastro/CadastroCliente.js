import react from "react";
import { Text, View, StyleSheet} from "react-native";
import ClienteForm from "../../components/Form/ClienteForm";
export default function CadastroCliente(){
    return(
             <View style={estilos.frame}>
                <ClienteForm/>
            </View>
)};

const estilos = StyleSheet.create({
    frame: {
      height: "100%",
      backgroundColor: '#B0392C',
      paddingTop: 35,
    }

});    