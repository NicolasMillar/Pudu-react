import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';

const {width} =Dimensions.get('screen')

const LoginScreen: React.FunctionComponent<IStackScrennProps> = props =>{
    const {navigation, route, name} =props;

    return (
        <View >
            <Text>Aqui pondria mi login, si tuviera uno !!!</Text>
            <Text style={ styles.button } onPress={() => navigation.navigate('HomeUser')}>A home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        marginTop: 11,
        marginBottom:25,
        height:40,
        width: width-15,
        backgroundColor: '#f28e07',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 40,
      },
})

export default LoginScreen;