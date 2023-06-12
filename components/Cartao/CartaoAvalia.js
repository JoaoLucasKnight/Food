import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Rating} from 'react-native-ratings';
import pizza from "../../assets/rait.png";
import Frota from "../../assets/Cartao/FoodH.jpg"
// passar a flat list
export default function CartaoAvalia (){
    return(
        <View style={estilos.box} >
            <Image source={Frota} style={estilos.imagem}/>
            <Text style={estilos.texto} >O restaurante tem uma atmosfera agradável e acolhedora que faz você se sentir em casa.</Text>
            <Rating
                    type='custom'
                    readonly={true}
                    ratingImage={pizza}
                    ratingColor="#7D291F"
                    ratingBackgroundColor="#FFD3CF"
                    ratingTextColor="#FFD3CF"
                    ratingCount={5}
                    startingValue={5}
                    imageSize={25}
                    showRating={false}
                    style={{
                        paddingBottom:12
                        
                    }}
                    onFinishRating={this.ratingCompleted}/>
        </View>
    )
};

const estilos = StyleSheet.create({

    box:{
        height: 150,
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        backgroundColor: "#7D291F",
        borderRadius: 24,
        marginTop: 16,
        marginHorizontal: 8
    },
    
    imagem:{
        alignContent: "stretch",
        height:150,
        width: 122,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        marginLeft: 28
    },

    texto:{
        width: 200,
        fontSize: 18,
        fontWeight: 300,
        color: "#FFD3CF",
        marginTop: 12,
        marginLeft: 12,
    }
});