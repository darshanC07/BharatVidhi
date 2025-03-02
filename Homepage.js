import { StyleSheet, Text, View, Image, ScrollView, Platform, StatusBar, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import Footer from './Footer'; 
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { useNavigation, useFocusEffect } from "@react-navigation/native";


export default function Homepage() {
  const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
            PatrickHandSC_400Regular,
            Itim_400Regular,
            
    });
    let lineNumbers = 3;
    function handlePress() {
        lineNumbers = 6;
        console.log("clicked")
    }
    return (
        <View style={{
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
                      fontSize : 24,
                      fontFamily : "YatraOne_400Regular",
                      color : '#232ED1',
                    }}>BHARAT विधि</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        alignSelf: "stretch",
                        marginRight : '2%',
                        marginLeft : '10%'
                    }}>
                        <Image source={require('../assets/notification.png')} style={{
                            marginRight : '5%'
                        }} />
                        <TouchableOpacity>
                            <Image source={require('../assets/coins.png')} style={{
                            marginRight : '5%'
                        }}/>
                        </TouchableOpacity>
                        <Image source={require('../assets/profile.png')} />
                    </View>
                </View>
                <View style={{
                    height: '16%',
                    marginTop : '2%',
                    backgroundColor: '#FFD8BE',
                    borderWidth : 3,
                    borderColor : '#F8B169',
                    borderStyle : 'dashed',
                    justifyContent : 'space-evenly',
                    alignItems : 'center'
                }}>
                  <Image source={require('../assets/Owl.png')} style={{ 
                    width: 65, 
                    height: 80, 
                    position : 'absolute', 
                    alignSelf : 'flex-start',
                    marginTop : '5%',
                    marginLeft : '2%' 
                  }} />
                  <Text style={{ color:'#A84949', fontFamily : "Itim_400Regular", marginLeft : '20%'}}>Traveler, every step you take shapes justice—venture forth and leave your mark!</Text>
                </View>

                <View>
                    <Text style={{
                        fontSize: 20,
                        marginTop : '3%',
                        marginBottom : '2%',
                        fontFamily : 'PatrickHandSC_400Regular'
                    }}>SECTIONS</Text>
                </View>
                <ScrollView style={{
                  height : '62%',
                }}>

                <TouchableOpacity onPress={()=>{
                                             navigation.navigate("Fundamental")
                                           }}>
                    <ImageBackground source={require('../assets/fundamentals.png')} style={{
                        resizeMode : 'cover',
                        height: 120,
                        marginBottom: 10,
                        justifyContent : 'center'
                    }}><Text style={{
                        textAlign : 'center',
                        fontSize : 18,
                        
                        color : 'white',
                        fontFamily : 'Itim_400Regular'
                    }}>FUNDAMENTALS</Text></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                                             navigation.navigate("Rights")
                                           }}>
                    <ImageBackground source={require('../assets/map_basic.png')} style={{
                        resizeMode : 'cover',
                        height: 120,
                        marginBottom: 10,
                        justifyContent : 'center'
                    }}><Text style={{
                        textAlign : 'center',
                        fontSize : 18,
                        
                        color : 'white',
                        fontFamily : 'Itim_400Regular'
                    }}>RIGHTS</Text></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                                             navigation.navigate("Property")
                                           }}>
                    <ImageBackground source={require('../assets/property.png')} style={{
                        resizeMode : 'cover',
                        height: 120,
                        marginBottom: 10,
                        justifyContent : 'center',
                    }}><Text style={{
                        textAlign : 'center',
                        fontSize : 18,
                       
                        color : 'white',
                        fontFamily : 'Itim_400Regular'
                    }}>PROPERTY</Text></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                                             navigation.navigate("Commercial")
                                           }}>
                    <ImageBackground source={require('../assets/commercial.png')} style={{
                        resizeMode : 'cover',
                        height: 120,
                        marginBottom: 10,
                        justifyContent : 'center'
                    }}><Text style={{
                        textAlign : 'center',
                        fontSize : 18,
                        
                        color : 'white',
                        fontFamily : 'Itim_400Regular'
                    }}>COMMERCIAL</Text></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  borderRadius : 15
                }}>
                    <ImageBackground source={require('../assets/loading.png')} style={{
                        resizeMode : 'cover',
                        height: 120,
                        marginBottom: 10,
                        justifyContent : 'center',
                        
                    }}><Text style={{
                        textAlign : 'center',
                        fontSize : 18,
                        color : 'white',
                        fontFamily : 'Itim_400Regular'
                    }}>MORE MAPS COMING SOON</Text></ImageBackground>
                </TouchableOpacity>
                </ScrollView>

            </View>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex : 1
    },
});