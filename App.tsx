import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View, Alert } from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import Carrusel from './assets/carrusel.json';

interface Carrusel {
  title: string;
  url: string;
  descripcion: string;
}
const {width} =Dimensions.get('screen')

export default function App() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Animated.FlatList 
          data={Carrusel}
          horizontal
          showsHorizontalScrollIndicator={false} 
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animatedValue}}}],
            {useNativeDriver: false}, 
          )}
          pagingEnabled={true}
          keyExtractor={(_,index) =>index.toString() } 
          renderItem={ ({item}) => {
            return (
              <View style={ styles.imagecontainer}>
                <Image style={ styles.image } source={{ uri: item.url}} />
                <Text style={ styles.textoTitulo }>{item.title}</Text>
                <Text style={ styles.texto }>{item.descripcion}</Text>
              </View>
            )
          }}
        />
      </View>
      <View style={styles.bottomcontainer}>
        <FlatList 
          data={Carrusel} 
          horizontal
          keyExtractor={(_,index) =>index.toString() } 
          renderItem={ ({index}) => {
            const inputRange = [
              (index-1)*width,
              index*width,
              (index+1)*width,
            ];
            const colorOutputRange = ['#025959', '#f28e07', '#025959'] 
            const scaleOutputRange = [1, 2, 1];
            const dotScale =  animatedValue.interpolate({
              inputRange,
              outputRange: scaleOutputRange,
              extrapolate: 'clamp',
            });
            const color= animatedValue.interpolate({
              inputRange,
              outputRange: colorOutputRange,
              extrapolate: 'clamp',
            })
            return(
              <View style={styles.dotcontainer}>
                <PaginDot color={color}  scale={dotScale}  />
              </View>
            )
          }}
        />
        <Text style={ styles.texto }>¿Te gusta como suena? </Text>
        <Text style={ styles.button } onPress={() => Alert.alert('pues si funciona')}>Continuar</Text>
      </View>
    </View>
  );
}

const PaginDot: FunctionComponent<{scale: any, color: any}> = ({scale, color}) =>{
  return <Animated.View style={[styles.pagindot, {backgroundColor: color ,transform: [{scale}]}]} /> 
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  topcontainer:{
    flex: 2,
  },
  bottomcontainer:{
    flex: 1,
    width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imagecontainer:{
    justifyContent: 'flex-end',
    padding: 40,
    alignItems: 'center',
    width
  },
  image:{
    width: width-80,
    height: 300,
    borderRadius: 40,
  },
  pagindot:{
    width: 14,
    height: 14,
    backgroundColor: '#f28e07',
    borderRadius: 7,
  },
  dotcontainer: {
    width: 50,
    padding: 10,
  },
  titlecontainer: {
    justifyContent: 'flex-end',
    padding: 40,
    alignItems: 'center',
    width
  },
  textoTitulo:{
    color: '#f26d3d',
    fontSize: 20,
    fontweight: 'bold',
    marginTop: 11,
  },
  texto: {
    color: '#f28e07',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 11,
  },
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
});
