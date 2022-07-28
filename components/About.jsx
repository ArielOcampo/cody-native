import React from 'react'

import { StyleSheet, useWindowDimensions, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const About = () => {

  const navigation = useNavigation();
  const codyimg = '../assets/cody3.png'
  const { height, width } = useWindowDimensions();

  let [fontsLoaded] = useFonts({
    'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
    'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),
  });
  const aboutStyles = StyleSheet.create({
    text: {
      primary: { color: "#00695c" },
      light: { color: "#f7f3f3" },
      center: { textAlign: 'center' },
      shadowLight: {
        textShadowColor: '#fff',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1
      },
      shadowPrimary: {
        textShadowColor: '#00695c',
        textShadowOffset: { width: 3, height: 1 },
        textShadowRadius: 1
      },
      shadowBlurLight: {
        textShadowColor: '#fff',
        textShadowOffset: { width: 3, height: 0 },
        textShadowRadius: 3
      },
      shadowBlurPrimary: {
        textShadowColor: '#00695c',
        textShadowOffset: { width: 3, height: 0 },
        textShadowRadius: 3
      }
    },
    aboutContainer: {
      height: height / 4 * 1.5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fae1d0'
    },
    textContainer: {
      height: "100%",
      width: '60%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 5
    }
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={aboutStyles.aboutContainer} resizeMethod='auto' resizeMode="cover" >
      <View style={aboutStyles.textContainer} >
        <View style={{ justifyContent: 'center' }}>
          <Text variant='h3' style={{ fontSize: 10, fontFamily: 'Mochy', color: '#581C0C', textAlign:'justify' }} ><Text style={{ fontSize: 11, fontFamily: 'Thunder-Love', color: '#581C0C' }}>Cody</Text> combina 3 conceptos que viven dentro de cada uno de nosotros</Text>
        </View>
        <View style={{ justifyContent: 'space-between', width: '100%' }}>
          <Text variant='h3' style={{ fontSize: 9, fontFamily: 'Mochy', color: '#581C0C', textAlign:'left', marginVertical:2 }} > <Text style={{ fontSize: 11, fontFamily: 'Thunder-Love', color: '#f89a2d' }}>{'<> '}Code</Text>, nuestra principal herramienta como desarrolladores.</Text>
          <Text variant='h3' style={{ fontSize: 9, fontFamily: 'Mochy', color: '#581C0C', textAlign:'left', marginVertical:2 }} ><Text style={{ fontSize: 11, fontFamily: 'Thunder-Love', color: '#581C0C' }}>{'<> '}Coffee</Text>, que tanto nos gusta y nos acompaña a ser constantes.</Text>
          <Text variant='h3' style={{ fontSize: 9, fontFamily: 'Mochy', color: '#581C0C', textAlign:'left', marginVertical:2 }} ><Text style={{ fontSize: 11, fontFamily: 'Thunder-Love', color: '#f89a2d' }}>{'<> '}Cody</Text>, el nombre de nuestra mascota digital, fiel compañero que está siempre con nosotros.</Text>
        </View>
      </View>
      <View style={{ height: "100%", justifyContent: 'center', alignItems: 'center', width: '40%', padding: 5 }}>
        <Image source={{ uri: 'https://i.imgur.com/UPyIndi.png' }} style={{
          width: '100%',
          height: '100%'
        }} resizeMethod='auto' resizeMode='contain' />
      </View>
    </View >
  )
}


export default About