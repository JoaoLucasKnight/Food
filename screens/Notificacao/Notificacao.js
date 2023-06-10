import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioBut from '../../components/botao/RadioBut';
import HeaderCad from '../../components/Headers/HeaderCad';


export default function Notificacao(){
  const [checked, setChecked] = React.useState('first')
  return(
    <View style={estilos.frame}>
      <HeaderCad/>

      <View style={estilos.box}>
        <Text style={estilos.texto}>Deseja receber Notificação</Text>
        <RadioBut/>
        <Text style={estilos.texto}>Novos Comentarios</Text>
        <RadioBut/>
        <Text style={estilos.texto}>Novas Avaliações</Text>
        <RadioBut/>
        <Text style={estilos.texto}>Novos Seguidores</Text>
        <RadioBut/>
        <Text style={estilos.texto}>Notificação de Publicação</Text>
        <RadioBut/>
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  frame: {
    height: "100%",
    backgroundColor: '#B0392C',
    paddingVertical: 55,
    paddingHorizontal: 25
  },

  texto:{
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 500,
    color: "#FFD3CF",
    marginTop: 15
  },
  box:{
    marginVertical: 25
  }
});