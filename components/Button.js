import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(){
    return (
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.texto}>users</Text>
        </TouchableOpacity>
    )
};




const estilos = StyleSheet.create({
    botao:{
        width: 150,
        height: 30,
        backgroundColor: '#FFD3CF',
        borderRadius: 16,
        marginVertical: 8
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