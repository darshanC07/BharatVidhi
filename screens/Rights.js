import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableWithoutFeedback,SafeAreaView,Image, Platform, PixelRatio,ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Footer from '../components/Footer';

export default function App() {
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
            <Image source={require('../assets/notification.png')} styles={styles.icon}></Image>
            <Image source={require('../assets/coins.png')}styles={styles.icon}></Image>
            <Image source={require('../assets/profile.png')}styles={[styles.icon,{  height:40,width:40}]}></Image>
        </View>
    </View> 
    <ScrollView style={styles.scroll}>
    <ImageBackground source={require('../assets/R8.png')} style={styles.each}>
    <TouchableOpacity>
    <View style={[styles.point,{top:650,left:130}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={[styles.point,{top:333,left:207}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground source={require('../assets/R7.png')} style={styles.each}>
    <TouchableOpacity>
    <View style={[styles.point,{top:574,left:98}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={[styles.point,{top:170,left:175}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground source={require('../assets/R6.png')} style={styles.each}>
    <TouchableOpacity>
    <View style={[styles.point,{top: 252,left: 205}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={[styles.point,{top: 490,left: 100}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground source={require('../assets/R5.png')} style={styles.each}>
    <TouchableOpacity>
    <View style={[styles.point,{top:620,left:120}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={[styles.point,{top:245,left:200}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground source={require('../assets/R4.png')} style={styles.each}><TouchableOpacity>
    <View style={[styles.point,{top:415,left:230}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground source={require('../assets/R3.png')} style={styles.each}>
    <TouchableOpacity>
    <View style={[styles.point,{top:255,left:128}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground source={require('../assets/rights2.png')} style={styles.each}>
    <TouchableOpacity>
    <View style={[styles.point,{top:465,left:125}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={[styles.point,{top:-56,left:199}]} onPress={() => navigation.navigate('Welcome.js')}></View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground source={require('../assets/rights1.png')} style={styles.each}><TouchableOpacity>
    <View style={[styles.point,{top:220,left:40}]} onPress={() => navigation.navigate('Welcome.js')}></View>
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
    width:40,
    backgroundColor:'pink',
    borderRadius:50,
  },
  icon:{
    height:100,
    width:100,
  },
  each : {
    width:340,
    height: 669, 
    resizeMode: 'cover'
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