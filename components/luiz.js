import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import But from './components/Button';



function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Feed"
        onPress={() => navigation.navigate('Feed')}
      />
      <Button
        title="Notificações"
        onPress={() => navigation.navigate('Notificações')}
      />
      <Button
        title="Configurações"
        onPress={() => navigation.navigate('Configurações')}
      />
      <Button title="Sair" onPress={() => navigation.goBack()} />
    </View>
  );
}



const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }