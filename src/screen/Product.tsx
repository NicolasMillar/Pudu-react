import { StyleSheet, Text, View, Button, Image  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';
import { ProductProps } from '../typings';
import { FontAwesome, FontAwesome5, Foundation, MaterialCommunityIcons  } from '@expo/vector-icons';
import { styles } from '../styles/productStyles';

import { firestore } from '../../firebase'

const ProductScreen: React.FunctionComponent<ProductProps> = props =>{
    const {navigation, route, name, id, product_name, product_image, fat_100g, proteins_100g, energy_kcal_100g, carbohydrates_100g
    , water_usage, carbon_footprint_serving, land_usage} =props;

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
                    <Text style={styles.informationText}>Calories: { params?.energy_kcal_100g }kcal</Text>
                    <Text style={styles.informationText}>Proteins:{ params?.proteins_100g }g</Text>
                    <Text style={styles.informationText}>Fat: { params?.fat_100g}g</Text>
                    <Text style={styles.informationText}>Carbs: { params?.carbohydrates_100g}g</Text>

                </View>

                <View style={styles.verticalContainer}>
                    <Text style={styles.informationLabel}>
                        Estimated Environmental Impact (per serving)
                    </Text>
                    <Text style={styles.informationText}>Carbon footprint: { params?.carbon_footprint_serving }kg CO2</Text>
                    <Text style={styles.informationText}>Water usage:{ params?.water_usage }lt</Text>
                    <Text style={styles.informationText}>Land usage: { params?.land_usage}meters squared</Text>

                </View>
                
                        
                
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerLogo } onPress={() => alert("Aun no funciono")}><Foundation name="magnifying-glass" size={43} color="#187f64" /></Text>
                <Text style={styles.footerLogo1 } onPress={() => navigation.navigate('HomeUser')}><FontAwesome name="home" size={55} color="#f59a23" /></Text>
                <Text style={styles.footerLogo2} onPress={() => alert("Aun no funciono")}><FontAwesome name="user-circle-o" size={45} color="#187f64" /></Text>
            </View>

        </View>
    )
}
 

export default ProductScreen;
