import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';

const {width, height} =Dimensions.get('screen')

const HomeUserScreen: React.FunctionComponent<IStackScrennProps> = props =>{
    const {navigation, route, name} =props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/INTERFAZ_PNG-11.png')}/>  
            </View>
            <View style={styles.content}>
                <Text style={styles.welcome}>Welcome!</Text>
                <View style={styles.rectangle}>
                    <Text style={styles.title}>Environmental goal</Text>
                    <Text style={styles.text}>Your contribution this week is equivalent to the capture of CO2 made by 10 trees, Keep it up!</Text>
                </View>
                <View style={styles.rectangle}>
                    <Text style={styles.title}>Fitness goals</Text>
                    <Text style={styles.text}>You have lost 1.2% body fat, 0.8% more and you will reach your goal. Keep going!</Text>
                </View>
                <Text style={styles.welcome}>What do you want to do?</Text>
                <View style={styles.buttomContainer}>
                    <Text style={ styles.button1 } onPress={() => alert("Aunnofunciono")}>Continue</Text>
                </View>
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
        flex: 4,
   },
   header:{
        width,
        height: 69,
        backgroundColor: '#187f64',
        justifyContent: 'center',
        alignItems: 'center',
   },
   content: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
   },
   footer: {
        width,
        height:68,
        backgroundColor: '#f2f2f2'
   },
   logo: {
        width: 134,
        height: 58,
        alignItems: 'center'
   },
   welcome: {
        color: '#f26d3d',
        marginTop: 30,
        fontSize: 28,
        marginBottom: 31,
   },
   rectangle: {
        width: 311,
        height: 99,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#187f64',
        borderRadius: 5,
        marginBottom: 46,
   },
   title: {
        color: '#187f64',
        fontSize: 20,
        fontWeight: "700",
        justifyContent: 'flex-start',
        marginBottom: 4,
   },
   text: {
        fontSize: 13,
   },
   buttomContainer:{

   },
   button1: {},
   button2: {},

});

export default HomeUserScreen;