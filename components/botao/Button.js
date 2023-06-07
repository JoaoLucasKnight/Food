import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Button(){
const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={()=> {navigation.navigate('Cadastro')}}
        style={estilos.botao}>
            <Text style={estilos.texto}>users</Text>
        </TouchableOpacity>
    )
};




const estilos = StyleSheet.create({
    botao:{
        width: 240,
        height: 30,
        backgroundColor: '#FFD3CF',
        borderRadius: 16,
        marginVertical: 16
    },

    texto:{
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 30,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#7D291F',
      },
})