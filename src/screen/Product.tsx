import { StyleSheet, Text, View, Button  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';
import { ProductProps } from '../typings';

import { firestore } from '../../firebase'

const ProductScreen: React.FunctionComponent<ProductProps> = props =>{
    const {navigation, route, name, id, product_name} =props;

    const params: ProductProps = props?.route?.params;
    

    return (
        <View>
            <Text>Product Screen</Text>
            <Text>Product ID: {params?.id}</Text>
            <Text>Product Name: {params?.product_name}</Text>
        </View>
    )
}

export default ProductScreen;
