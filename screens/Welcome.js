import { Astloch_400Regular } from '@expo-google-fonts/astloch';
import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, TouchableWithoutFeedbackBase ,ScrollView, ImageBackground, SafeAreaView, Button, Dimensions} from 'react-native';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import React, { useState } from 'react';
import { Itim_400Regular } from '@expo-google-fonts/itim';
import { Iceland_400Regular } from '@expo-google-fonts/iceland';
import { useNavigation } from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
            Astloch_400Regular,
          });
  return (
    <SafeAreaView >
      {/* <StatusBar hidden /> */}
        <View style={{backgroundColor:'rgba(253,177,55,0.2)',height:Dimensions.get('window').height+20}}>
            <ImageBackground source={require('../assets/Group 201.png')} style={{width:430,height:164}}>
                <Text style={{fontFamily:'Astloch_400Regular',fontSize:45,alignSelf:'center',top:"50%"}}>
                    Welcome
                </Text>
            </ImageBackground>
            <View style={{padding:30}}>
            <Text  style={{fontFamily:'Astloch_400Regular',fontSize:24,alignSelf:'center',textAlign:'center'}}>
                "Traveler, you have arrived at the gates of Bharat Vidhi, a realm where the wisdom of the Constitution is etched into the very fabric of the universe. I am Orien, your guide through these lands. Each realm you explore will reveal the laws that shape our world—some resting on floating islands, others hidden among the stars.As you take your first step, you awaken in the grand halls of Bharat Vidhi, where the very essence of India's Constitution is preserved. Orien stands before you, holding out an ancient Scroll of Sovereignty."
            </Text>

            </View>
            <ImageBackground source={require('../assets/Group 201.png')} style={{width:430,height:164}}>
            <TouchableOpacity>
                <Text style={{fontFamily:'Astloch_400Regular',fontSize:18,alignSelf:'center',top:'30%'}} onPress={() => navigation.navigate('Next')}>
                    Click To Proceed !
                </Text>
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={{position:"absolute",top:100,left:300,width:67,height:67}}></Image>
            </ImageBackground>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding:20,
    flexDirection:'column'
   
  },
  heading:{
   fontSize:50,
   position:'absolute',
   top:'8%'
  },
  content:{
    fontSize:24,
    fontFamily:'Astloch_400Regular',
    lineHeight:30,
    width:'75%',
    textAlign:'justify',
    
  },
  proceed:{
    fontSize:15,
    top:'10%'
  },
  
    bottom_image:{
      position: 'absolute',  
    bottom:'0%',
    },
});
