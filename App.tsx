import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import routes from './src/config/routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        {routes.map((r,i) => (
          <Stack.Screen key={i} name={r.name}>
            {(props) => <r.component name={r.name} {...props} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
