import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./screens/Home";
import { Cadastro } from "./screens/Cadastro";
import { Perfil } from "./screens/Perfil";
import {Feed} from "./screens/Feed"

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default function App() {
  
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  )
};