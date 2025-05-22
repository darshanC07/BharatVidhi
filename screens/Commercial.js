import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableWithoutFeedback,SafeAreaView,Image,TouchableOpacity, Platform, PixelRatio,ScrollView, ImageBackground} from 'react-native';
import Footer from '../components/Footer';
import React, { useRef, useEffect } from "react";

export default function Commercial() {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
        height: 50,
        flexDirection: "row",
        verticalAlign:'top',
        marginTop : '13%',
        paddingRight: 20,
        paddingLeft: 20
    }}>
        <Text style={{
            fontSize: 25,
            color : '#232ED1',
            fontWeight : 'bold',
            textAlign : 'left',
        }}>BHARAT VIDHI</Text>

        <View style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: "row",
            alignSelf: "stretch",
            marginLeft : '16%' 
        }}>
            <Image source={require('../assets/notification.png')} styles={{marginRight : '3%'}}></Image>
            <Image source={require('../assets/coins.png')}></Image>
            <Image source={require('../assets/profile.png')}></Image>
        </View>
    </View>
    <ScrollView style={styles.scroll} ref={scrollViewRef}>
      <ImageBackground source={require('../assets/commercial_3.png')} style={styles.each}>
       <TouchableOpacity>
          <View style={[styles.point,{top:150,left:300}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={[styles.point,{top:250,left:45}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={[styles.point,{top:405,left:310}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={[styles.point,{top:500,left:15}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
      </ImageBackground>
      <ImageBackground source={require('../assets/commercial_2.png')} style={styles.each}>
      <TouchableOpacity>
          <View style={[styles.point,{top:90,left:300}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={[styles.point,{top:270,left:20}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={[styles.point,{top:360,left:275}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
      </ImageBackground>
      <ImageBackground source={require('../assets/commercial_1.png')} style={styles.each}>
      <TouchableOpacity>
          <View style={[styles.point,{top:25,left:45}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={[styles.point,{top:170,left:295}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={[styles.point,{top:220,left:50}]} onPress={() => navigation.navigate('Learning')}></View>
          </TouchableOpacity>
      </ImageBackground>
      
    </ScrollView>
    <Footer></Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  point:{
    height:40,
    width:20,
    
   opacity:0.1,
  },
  each : {
    width:340,
    height: 635, 
    resizeMode: 'stretch'
  },
  container: {
    backgroundColor: 'white',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  scroll:{
    width : 340,
    borderRadius : 10,
    marginTop : '5%',
    marginBottom : '22%'
  }
});