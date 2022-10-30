import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';
import { FontAwesome, FontAwesome5, Foundation, MaterialCommunityIcons  } from '@expo/vector-icons';

const {width, height} =Dimensions.get('screen')

const SearchBarScreen: React.FunctionComponent<IStackScrennProps> = props =>{
    const {navigation, route, name} =props;

    function filterSearch(text:any){
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/INTERFAZ_PNG-11.png')}/>  
            </View>
            <View style={styles.content}>
                <TextInput style={styles.searchbar} onChangeText={(text) => filterSearch(text)} />
            </View>
            <View style={styles.footer}>
              <Text style={styles.footerLogo } onPress={() => alert("Aun no funciono")}><Foundation name="magnifying-glass" size={43} color="#187f64" /></Text>
              <Text style={styles.footerLogo1 } onPress={() => navigation.navigate('HomeUser')}><FontAwesome name="home" size={55} color="#f59a23" /></Text>
              <Text style={styles.footerLogo2} onPress={() => alert("Aun no funciono")}><FontAwesome name="user-circle-o" size={45} color="#187f64" /></Text>
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
     backgroundColor: '#f2f2f2',
     flexDirection: 'row',
   },
   logo: {
     width: 134,
     height: 58,
     alignItems: 'center'
   },
   footerLogo: {
    width: 38,
    height: 38,
    marginTop: 14,
    marginLeft: 49,
    marginBottom: 16,
    marginRight: 80
   },
   footerLogo1: {
    width: 56,
    height: 48,
    marginTop: 9, 
    marginBottom: 11
   },
   footerLogo2:{
    width: 45,
    height: 45,
    marginTop:14,
    marginBottom: 9,
    marginLeft: 84,
    marginRight: 38,
    alignItems: 'center'
   },
   searchbar: {
    width: 350,
    height: 40,
    borderColor:"black",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 22,
   }

});

export default SearchBarScreen;