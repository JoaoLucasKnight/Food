import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ButConfig (props)  {
const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={()=> {
            switch (props.name){
                case 'Alterar Cadastro':
                    return (navigation.navigate('CadastroCliente'));
                    break;    
                case 'Notificação':
                    return (navigation.navigate('Notificacao'));
                    break; 
                case 'Ajuda':
                    return (navigation.navigate('Ajuda'));
                    break; 
                case 'Sair':
                    return (navigation.navigate('Alterar'));
                    break;    
            }
        }}
        style={estilos.botao} >
            <Text style={estilos.texto}>{props.name}</Text>
        </TouchableOpacity>
    )
};




const estilos = StyleSheet.create({
    botao:{
        width: 180,
        height: 32,
        backgroundColor: '#FFD3CF',
        borderRadius: 32,
        marginVertical: 16
    },

    texto:{
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        width: 180,
        lineHeight: 32,
        display: 'flex',
        textAlign: 'center',
        color: '#7D291F',
      },
})