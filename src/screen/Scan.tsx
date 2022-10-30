import { StyleSheet, Text, View, Button  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { IStackScrennProps } from '../library/StackScreenProps';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { firestore } from '../../firebase'

const ScannerScreen: React.FunctionComponent<IStackScrennProps> = props =>{
    const {navigation, route, name} =props;
    const [hasPermission, setHasPermission] = useState<any | null> (null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')
    const initialProductState = {
        id: '',
        product_name: '',
    }

    const [product, setProduct] = useState(initialProductState);
    const getProduct = async (id: any) => {
        const dbRef = firestore.collection('products').doc(id);
        const doc = await dbRef.get();
        const product_name = doc?.data()?.product_name;
        setProduct({ ...product, id, product_name });
    }

  
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted');
      })()
    }

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ type, data }: {type: any, data: any}) => {
        setScanned(true);
        
        getProduct(data);
        setText(product.product_name);
        console.log('Type: ' + type + '\nData: ' + data)
    };  

    if (hasPermission === null) {
        return (
          <View style={styles.container}>
            <Text>Requesting for camera permission</Text>
          </View>)
      }
    if (hasPermission === false) {
        return (
          <View style={styles.container}>
            <Text style={{ margin: 10 }}>No access to camera</Text>
            <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
          </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: 400, width: 400 }} />
            </View>
            <Text style={styles.maintext}>{text}</Text>
    
            {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: 16,
      margin: 20,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: 'tomato'
    }
  });

export default ScannerScreen;