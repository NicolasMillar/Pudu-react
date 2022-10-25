import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, {FunctionComponent, useRef} from 'react';

const images: string[] = [
  'https://d1icd6shlvmxi6.cloudfront.net/gsc/378QU0/37/09/fa/3709facb9d7543ffaff0b65c02f5c651/images/oboarding/u2.png?pageId=72536fe3-b8e6-4ee3-a10e-c794dba109f0',
  'https://d1icd6shlvmxi6.cloudfront.net/gsc/378QU0/37/09/fa/3709facb9d7543ffaff0b65c02f5c651/images/oboarding/u8.png?pageId=72536fe3-b8e6-4ee3-a10e-c794dba109f0',
  'https://d1icd6shlvmxi6.cloudfront.net/gsc/378QU0/37/09/fa/3709facb9d7543ffaff0b65c02f5c651/images/oboarding/u15.png?pageId=72536fe3-b8e6-4ee3-a10e-c794dba109f0',
];
const texto: string[] = [
  'Busca productos alimenticios en tu hogar o en supermercados por medio de sus códigos de barra ',
  'Obtén la información nutricional y ambiental de los diferentes productos que hayas escaneado para efectuar decisiones conscientes con el planeta y contigo mismo',
  'Apoya a la comunidad agregando nuevos productos para que así todos tomemos mejores decisiones al consumir alimentos',
];

const {width} =Dimensions.get('screen')

export default function App() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Animated.FlatList 
          data={images}
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
                <Image style={ styles.image } source={{ uri: item}} />
              </View>
            )
          }}
        />
      </View>
      <View style={styles.bottomcontainer}>
        <FlatList 
          data={images} 
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
  texto: {},
});
