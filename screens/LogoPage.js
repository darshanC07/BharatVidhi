import { StyleSheet, Text, View, Image, Platform, StatusBar , Dimensions, TouchableOpacity} from 'react-native';
import { useFonts, YatraOne_400Regular } from '@expo-google-fonts/yatra-one';
import {NixieOne_400Regular} from '@expo-google-fonts/nixie-one';
import { useNavigation } from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation()
  const [fontsLoaded] = useFonts({
    YatraOne_400Regular,
    NixieOne_400Regular
  });
  return (
    <View style={styles.container}>
      <Image source={require('../assets/login/Rectangle_3.png')} style={styles.flag1}></Image>
      <Image source={require('../assets/login/Rectangle_4.png')} style={styles.flag2}></Image>
      <Image source={require('../assets/login/chakra2.png')} style={styles.bg1}></Image>
      <Image source={require('../assets/login/chakra1.png')} style={styles.bg2}></Image>
      <Image source={require('../assets/login/chakra3.png')} style={styles.bg3}></Image>
      <Image source={require('../assets/login/National_Emblem.png')} style={styles.bg4}></Image>
      <Image source={require('../assets/login/India_gate.png')} style={styles.bg5}></Image>
      <View style={styles.borderContainer}>
        <Image source={require('../assets/logo.png')} style={{
          alignSelf : 'center',
          height : '20%',
          width : '50%',
          marginTop : '40%'
        }}/>
        <Text style={{
          fontSize : 40,
          fontFamily : "YatraOne_400Regular",
          color : '#232ED1',
          width : '100%',
          textAlign : 'center'
        }}>BHARAT विधि</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("SignUp")
        }}>
        <Text style={{
          fontSize : 18,
          textAlign : 'center',
          color : '#2E5AFF',
          fontFamily : "NixieOne_400Regular",
          marginTop : '60%'
        }}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop:Platform.OS == "android" ? StatusBar.currentHeight:0
  
  },
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  borderContainer: {
    width: '90%',
    height: '93%',
    borderWidth: 5,
    borderColor: '#FFDCB9',
    borderRadius: 10,
    padding: 20,
    paddingTop:0,
    marginTop: "10%",
    marginBottom: "5%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 45,
    paddingTop: "18%",
    display: "flex",
    width: 200,
    fontWeight: "bold",
    color: '#232ED1',
    textAlign: "center",
    lineHeight: 50,
    textAlignVertical: "center",
    fontFamily: "monospace",
    marginBottom: '10%'
  },
  logIn: {
    fontSize: 24,
    lineHeight: 70,
    fontFamily: "itim",
    color: "#a596ff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 122,
    paddingTop: "8%",
    marginBottom : '15%'
  },
  rectangleView: {
    borderRadius: 15,
    backgroundColor: "#ffeedd",
    width: "90%",
    height: "8%",
    opacity: 0.5,
    paddingTop: 20,
    marginBottom: '15%'
  },
  fieldText: {
    fontSize: 15,
    color: "#242424",
    textAlign: "left",
    paddingLeft: 20,
    paddingBottom: 5,
    display: "flex",
    alignItems: "center"
  },
  proceedBox: {
    height: "5%",
    width: "30%",
    backgroundColor: "#B8B8FF",
    marginTop: "8%",
    opacity: 0.5,
    borderRadius: 10,
    borderColor: "#B8B8FF",
    borderWidth: 2,
  },
  proceedText: {
    textAlign: "center",
    color: "#232ED1",
    paddingTop: "8%",
    fontWeight: "bold"
  },
  toSignUp: {
    marginTop: '20%'
  },
  signUp: {
    textDecorationLine: "underline"
  },
  flag1: {
    top: '15%',
    position: 'absolute',
    resizeMode: 'contain',
  },
  flag2: {
    top: '65%',
    position: 'absolute',
    resizeMode: 'contain'
  },
  bg1: {
    position: 'absolute',
    right: 0,
    top: 70,
    resizeMode: 'contain',
    opacity: 0.1
  },
  bg2: {
    position: 'absolute',
    right: 0,
    top: 0,
    resizeMode: 'contain',
    opacity: 0.3
  },
  bg3: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    resizeMode: 'contain',
    opacity: 0.3
  },
  bg4: {
    position: 'absolute',
    left: 0,
    top: 0,
    resizeMode: 'contain',
    opacity: 0.5
  },
  bg5: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    resizeMode: 'contain',
    opacity: 0.5
  }
});