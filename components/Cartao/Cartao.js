import react from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Rating} from 'react-native-ratings';
import pizza from "../../assets/rait.png";

export default function Cartao({perfil, nome, empresa, imagem}){
    return (
        <View style={estilos.box} >
            <View style={estilos.box1}>
                <Image source={perfil} style={estilos.avatar} />
                <Text style={estilos.perfil} > {nome} </Text>
                <Text style={estilos.empresa}>{empresa}</Text>
            </View>
            <Image source={imagem} style={estilos.ex}/>
            <View>
            <Rating
                 type='custom'
                 readonly={true}
                 ratingImage={pizza}
                 ratingColor="#7D291F"
                 ratingBackgroundColor="#FFD3CF"
                 ratingTextColor="#FFD3CF"
                 ratingCount={5}
                 startingValue={5}
                 imageSize={30}
                 showRating={true}
                 style={{
                    flexDirection: "row",
                    justifyContent:"space-around",
                    paddingVertical: 16,
                    
                }}
                 onFinishRating={this.ratingCompleted}/>
            </View>
        </View>
    )
};

const estilos = StyleSheet.create({
    box:{   
        width: "100%",
        height: 450,
        backgroundColor: "#7D291F",
        borderRadius: 48,
        marginBottom: 16
    },

    ex:{
        width: "100%",
        height: 300,
    },
    
    box1:{
        height: 75,
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        

        paddingHorizontal: 32
    },
    avatar:{
        alignContent: "stretch",
        width: 55,
        height: 55,
        borderRadius: 55/2,
        marginRight: 16,
        borderWidth: 1.5,
        borderColor: "#FFD3CF"
    },

    perfil:{
        fontSize: 20,
        color:"#FFD3CF",
        fontWeight: 500
    },

    empresa:{
        fontSize: 16,
        color:"#FFD3CF",
        fontWeight: 300,
        marginHorizontal: 8
    }

});