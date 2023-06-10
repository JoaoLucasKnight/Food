import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function RadioBut(){
  const [checked, setChecked] = React.useState('first')
  return(
    <View style={estilos.box}>
        <View style={estilos.box2} >
        <Text style={estilos.texto} >Sim</Text>
        <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
            uncheckedColor="#FFD3CF"
            color='#7D291F'
        />
        </View>

        <View style={estilos.box2} >
        <Text style={estilos.texto} >Não</Text>
        <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
            uncheckedColor="#FFD3CF"
            color='#7D291F'
        />
        </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  box:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    marginBottom: 24

  },

  box2:{
    flexDirection: "row"
  },

  texto:{
    fontSize: 20,
    fontWeight: 300,
    color: "#FFD3CF",
    lineHeight: 40
    
  }
});