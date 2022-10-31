import { StyleSheet, Text, View, Button, Image  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';
import { ProductProps } from '../typings';
import { FontAwesome, FontAwesome5, Foundation, MaterialCommunityIcons  } from '@expo/vector-icons';
import { styles } from '../styles/productStyles';

import { firestore } from '../../firebase'

const ProductScreen: React.FunctionComponent<ProductProps> = props =>{
    const {navigation, route, name, id, product_name} =props;

    const initialProductState = {
        id: '1',
        product_name: 'yogurt',
        product_image: 'https://images.openfoodfacts.org/images/products/780/295/500/7799/front_es.14.200.jpg',
        fat_100g: '27',
        proteins_100g: '13',
        energy_kcal_100g: '145',
    };

    const [product, setProduct] = useState(initialProductState);

    const params: ProductProps = props?.route?.params;
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/INTERFAZ_PNG-11.png')}/>  
            </View>
            <View style={styles.content}>

            <View style={styles.nameAndImageContainer}>
                <Text style={styles.title}>
                    { params?.product_name }
                </Text>
                <Image style={styles.productImage} source={{uri: params?.product_image}}/>  
            </View>

            <View style={styles.verticalContainer}>
                <Text style={styles.informationLabel}>
                    Nutritional information (per 100g)
                </Text>

                <View style={styles.horizontalContainer}>
                    <Text>{ params?.energy_kcal_100g }kcal</Text>
                    <Text>{ params?.proteins_100g }g</Text>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text>{ params?.fat_100g}g</Text>
                    <Text>{ params?.carbohydrates_100g}g</Text>
                </View>

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
            <Text>
                {params?.product_name}
            </Text>

        </View>
    )
}
 

export default ProductScreen;
