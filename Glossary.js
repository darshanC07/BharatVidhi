
import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, Button} from 'react-native';
import Footer from './Footer';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import React, { useState } from 'react';
import { Itim_400Regular } from '@expo-google-fonts/itim';
import { Iceland_400Regular } from '@expo-google-fonts/iceland';
const Streaks=0;
const level=0;
const badge=0;

const Glossary =({word,meaning})=>{
  return(
    <View style={{flexDirection:'row',gap:20,alignSelf:'center',}}>
      <View style={{height:'80%',width:'40%'}}>
      <Text style={{fontSize:18,fontFamily:'Itim_400Regular',flexWrap:'wrap'}}>{word}</Text>
      </View>
      <View style={{height:'100%',width:1,backgroundColor:'black'}}></View>
      <View style={{height:'100%',width:'50%'}}>
      <Text style={{fontSize:18,fontFamily:'Itim_400Regular',flexWrap:'wrap'}}>{meaning}</Text>
      </View>
    </View>
  );
};
// const a_Array=[
//   <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>,
//   <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>,
//   <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>,
//   <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary> , 

// ];
//  const BlocksTray = ({ blocks }) => {
//   return (
//     <View style={styles.trayContainer}>
//       {blocks.map((block, index) => (
//         <View key={index}>{block}</View>
//       ))}
//     </View>
//   );
// };
export default function Gloss() {
    const [fontsLoaded] = useFonts({
        PatrickHandSC_400Regular,
        Itim_400Regular,
        Iceland_400Regular
      });
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View style={{
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                paddingRight: 20,
                paddingLeft: 20
            }}>
                <View style={{
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 10,
                    flexDirection: "row"
                }}>
                    <Text style={{
                        fontSize: 25,
                        flex: 2,
                        color : '#232ED1',
                        fontWeight : 'bold'
                    }}>BHARAT VIDHI</Text>

                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        alignSelf: "stretch",
                        marginRight : '2%'
                    }}>
                        <Image source={require('./assets/notification.png')} />
                        <Image source={require('./assets/coins.png')} />
                        <Image source={require('./assets/profile.png')} />
                    </View>
                </View>
            </View>
            <Text style={{
                textAlign : 'center',
                fontSize : 24,
                fontFamily : 'PatrickHandSC_400Regular',
                marginBottom : '2%'
            }}>GLOSSARY</Text>
            <ScrollView style={styles.scroll}>
            <Text style={{fontFamily:'Itim_400Regular',fontSize:24}}>Aa</Text>
            <View style={{height:1,width:'100%',marginVertical: 10,backgroundColor:'black'}}/>
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>  
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>   
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>   
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>   
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>   
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>   
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary>  
            <Glossary word={'Adjournment Motion'} meaning={'A tool used in the Indian Parliament to bring urgent public issues to the government’s attention by temporarily suspending regular business.   '}></Glossary> 
                
            </ScrollView>
            <Footer></Footer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scroll:{
      padding:20,
    },

    container: {
        backgroundColor: 'white',
        
        
    },
    logout:{
        alignSelf:'center',
        backgroundColor:'white',
        top:120,
        height:40,
        width:140,
        borderRadius:10,
        opacity:0.7
    },
    set1:{
        top:140,
        gap:20
    },
    set2:{
        top:170,
        gap:20 
    },
    score:{
       
        top:120,
        height:500,
        width:350,
        gap:50,
        backgroundColor:'#4C66F8',
        borderRadius:20,
        fontFamily:'Iceland_400Regular'
    },
    block:{
       
        top:100,
        height:100,
        width:100,
        backgroundColor:'#FFEEDD',
        
        borderRadius:10
    },
    info:{
        fontSize:24,
        textAlign:'center',
        top:60,
        fontFamily : 'Itim_400Regular'
    },
    pfp:{
        top:150,
        alignSelf:'center',
        zIndex:2
    },
    bg:{
       
        borderRadius:15,
        height:2000,
        
        width:'100%',
    },
   
});













