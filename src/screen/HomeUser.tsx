import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';
import { FontAwesome, FontAwesome5, Foundation, MaterialCommunityIcons  } from '@expo/vector-icons';

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
                    <Text style={styles.title}>
                      <FontAwesome name="leaf" size={25} color="#187f64" />
                      Environmental goal
                      <FontAwesome name="leaf" size={25} color="#187f64" />
                    </Text>
                    <Text style={styles.text}>Your contribution this week is equivalent to the capture of CO2 made by 10 trees, Keep it up!</Text>
                </View>
                <View style={styles.rectangle}>
                    <Text style={styles.title}>
                      <FontAwesome5 name="utensils" size={24} color="#187f64" />
                      Fitness goals
                      <FontAwesome5 name="utensils" size={24} color="#187f64" />
                    </Text>
                    <Text style={styles.text}>You have lost 1.2% body fat, 0.8% more and you will reach your goal. Keep going!</Text>
                </View>
                <Text style={styles.welcome}>What do you want to do?</Text>
                <View style={styles.buttomContainer}>
                    <Text style={ styles.button1 } onPress={() => navigation.navigate('Scanbar')}>
                      Scan products {"\n"} 
                      <MaterialCommunityIcons name="barcode-scan" size={45} color="#025959" />
                    </Text>
                    <Text style={ styles.button2 } onPress={() => navigation.navigate('Search')}>
                      Search products {"\n"} 
                      <Foundation name="magnifying-glass" size={43} color="#f28e07" />
                    </Text>
                </View>
                <View style={styles.buttomContainer}>
                    <Text style={ styles.button2 } onPress={() => alert("Aun no funciono")}>
                      Nutritional record {"\n"} 
                      <FontAwesome name="book" size={41} color="#f28e07" />
                      <FontAwesome name="cutlery" size={22} color="#f28e07" />
                    </Text>
                    <Text style={ styles.button1 } onPress={() => alert("Aun no funciono")}>
                      Stadistics {"\n"}
                      <FontAwesome5 name="chart-bar" size={42} color="#025959" /> 
                    </Text>
                </View>
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
   welcome: {
     color: '#f26d3d',
     marginTop: 17,
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
     marginBottom: 30,
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
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginLeft: "auto",
     marginRight: "auto",
     width, 
     marginBottom: "auto"
   },
   button1: {
     backgroundColor: '#f28e07',
     width: 146,
     height: 94,
     borderWidth: 1,
     borderRadius: 5,
     borderColor: '#F28E07',
     marginLeft: "auto",
     marginRight: "auto",
     fontWeight: '700',
     color: '#fff',
     textAlign: 'center',
     fontSize: 16,
     paddingTop: 15,
   },
   button2: {
     backgroundColor: '#025959',
     width: 146,
     height: 94,
     borderWidth: 1,
     borderRadius: 5,
     borderColor: '#025959',
     marginLeft: "auto",
     marginRight: "auto",
     fontWeight: '700',
     color: '#fff',
     textAlign: 'center',
     fontSize: 16,
     paddingTop: 15,

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
   }

});

export default HomeUserScreen;