// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform, StatusBar, Dimensions} from 'react-native';

export default function App() {
  return (
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView>
        <View style={styles.container}>
          <Image source={require('../assets/login/Rectangle_1.png')} style={styles.flag1}></Image>
          <Image source={require('../assets/login/Rectangle_2.png')} style={styles.flag2}></Image>
          <Image source={require('../assets/login/chakra2.png')} style={styles.bg1}></Image>
          <Image source={require('../assets/login/chakra1.png')} style={styles.bg2}></Image>
          <Image source={require('../assets/login/chakra3.png')} style={styles.bg3}></Image>
          <View style={styles.borderContainer}>
            <Text style={styles.text}>BHARAT VIDHI</Text>
            <Text style={styles.logIn}>LOGIN</Text>;
            <View style={styles.rectangleView}> 
            <TextInput style={styles.fieldText} placeholder='Email-id'></TextInput></View>
            <View style={styles.rectangleView}> 
            <TextInput style={styles.fieldText} placeholder='Password'></TextInput ></View>
            <View style={styles.rectangleIcon} />;
            <View style={styles.proceedBox}><Text style={styles.proceedText}>PROCEED</Text></View>
            <View style={styles.google}><Text style={styles.googleText}>Sign Up using Google
              <Image source={require('../assets/login/Search.png')} style={styles.googleImage}></Image>
              </Text>
            </View>
            <Text style={styles.toSignUp}>Don't have a account?
              <Text style={styles.signUp}>Sign up!</Text>
            </Text>
          </View>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer : {
    flex : 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex : 1,
    height : Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  borderContainer : {
    width: '90%',
    height: '100%',
    borderWidth: 5,
    borderColor: '#FFDCB9',
    borderRadius: 10,
    padding: 20,
    marginTop : "20%",
    marginBottom: "3%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 45,
    // paddingTop : "18%",
    display: "flex",
    width: 200,
    fontWeight: "bold",
    color: '#232ED1',
    textAlign: "center",
    lineHeight: 50,
    textAlignVertical: "center",
    fontFamily: "monospace",
  },
  logIn : {
    fontSize: 24,
    lineHeight: 70,
    fontFamily: "itim",
    color: "#a596ff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 122, 
    paddingTop: "15%"
  },
  rectangleView: {
    borderRadius: 15,
    backgroundColor: "#ffeedd",
    width: "90%",
    height: "7%",
    opacity: 0.5,
    // marginTop : '%',
    textAlignVertical : 'center',
    marginBottom: '10%'
  },
  fieldText: {
    fontSize: 15,
    color: "#242424",
    textAlign: "left",
    paddingLeft: 20,
    display: "flex",
    alignItems: "center"
  },
  proceedBox : {
    height: "5%", 
    width: "30%",
    backgroundColor: "#B8B8FF",
    marginTop: "5%",
    opacity: 0.5,
    borderRadius: 10,
    borderColor: "#B8B8FF",
    borderWidth: 2,
  },
  proceedText : {
    textAlign: "center",
    color: "#232ED1",
    paddingTop: "5%",
    fontWeight: "bold"
  },
  google : {
    backgroundColor: "rgba(189, 184, 179, 0.25)",
    width: "70%",
    height: "5%",
    marginTop: "8%",
    opacity: 0.5,
    borderWidth: 0.5,
    borderRadius: 5
  },
  googleText : {
    textAlign: "center",
    verticalAlign : 'middle'
  },
  googleImage : {
    alignSelf : 'flex-end',
    verticalAlign : 'middle', 
    opacity : 1,
    height:30,
    width:30
  },
  toSignUp : {
    marginTop : 20
  },
  signUp : {
    textDecorationLine : "underline"
  },
  flag1 : {
    top: '17%',
    position : 'absolute',
    resizeMode : 'contain'
  },
  flag2 : {
    top: '27%',
    position : 'absolute',
    resizeMode : 'contain'
  },
  bg1 : {
    position : 'absolute',
    right : 0, 
    top : 0,
    resizeMode : 'contain',
    opacity : 0.7
  },
  bg2 : {
    position : 'absolute',
    right : 0, 
    top : 70,
    resizeMode : 'contain',
    opacity : 0.95
  },
  bg3 : {
    position : 'absolute',
    left : 0, 
    bottom : 0,
    resizeMode : 'contain',
    opacity : 0.8
  }
});
