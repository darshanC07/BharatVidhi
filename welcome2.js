import { Astloch_400Regular } from '@expo-google-fonts/astloch';
import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, TouchableWithoutFeedbackBase ,ScrollView, ImageBackground, SafeAreaView, Button} from 'react-native';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import React, { useState } from 'react';
import { Itim_400Regular } from '@expo-google-fonts/itim';
import { Iceland_400Regular } from '@expo-google-fonts/iceland';
export default function App() {
    const [fontsLoaded] = useFonts({
            Astloch_400Regular,
          });
  return (
    <View style={{backgroundColor:'rgba(253,177,55,0.3)',flex:1}}>
        
            
              <ImageBackground source={require('../assets/scroll2.png')} style={{marginTop:'8%'}}>
              {/* <View style={{alignSelf:'center',width:'70%',height:'90%',marginTop:'30%'}}> */}
                <Text  style={{fontFamily:'Astloch_400Regular',fontSize:24,alignSelf:'center',textAlign:'justify',alignSelf:'center',width:'70%',height:'85%',top:'20%'}}>
                  "The balance of justice in this land is at stake. You must embark on a journey across the domains of law, rights, and governance to restore harmony. Each challenge you face will test your wisdom, and only those who truly understand the Constitution can unlock its deepest secrets.
                  The path ahead is uncertain, but the fate of Bharat Vidhi rests in your hands. Will you rise to the challenge?”
              </Text>
              {/* </View> */}
            
            </ImageBackground>
            <TouchableOpacity>
                <Text style={{fontFamily:'Astloch_400Regular',fontSize:18,alignSelf:'center'}} onPress={() => navigation.navigate('Next')}>
                    Start your Journey!
                </Text>
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={{position:"absolute",top:770,right:10,width:67,height:67}}></Image>
            
       

    </View>
  );
}

