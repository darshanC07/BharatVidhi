import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Alert,
  Image,
  ScrollView,
  Button,
  Platform,
  StatusBar,
  TouchableWithoutFeedback
  , ImageBackground
} from "react-native";
import Footer from "./Footer";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Homepage() {
  const navigation = useNavigation()
  const [user, setUser] = useState(null);
  const [orientation, setOrientation] = useState()

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }

  useFocusEffect(
    React.useCallback(() => {
      const fetchUser = async () => {
        const userSession = await AsyncStorage.getItem("userSession");
        if (!userSession) {
          navigation.replace("Login");
        } else {
          console.log(JSON.parse(userSession));
          setUser(JSON.parse(userSession));
        }
      };

      fetchUser();

      return () => { };
    }, [])
  );

  useEffect(() => {
    async function getCurrentOrientation() {
      let currentOrientation = await ScreenOrientation.getOrientationAsync();
      console.log(currentOrientation)
      setOrientation(currentOrientation)
    }
    getCurrentOrientation()
  }, [orientation])
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userSession");
    navigation.replace("Login");
  };

  let lineNumbers = 3;
  function handlePress() {
    lineNumbers = 6;
    console.log("clicked");
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: 0
      }}
    >
      <View
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        {/* <StatusBar/> */}

        <View
          style={{
            // backgroundColor: "lightblue",
            // marginTop: 40,
            height: 60,
            paddingTop: 10,
            paddingBottom: 10,
            // flex: 1,
            // justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <Text style={{
            fontSize: 25,
            color: '#232ED1',
            fontWeight: 'bold',
            textAlign: 'left',
          }}>BHARAT VIDHI</Text>

          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              flexDirection: "row",
              alignSelf: "stretch",
            }}
          >
            <Image source={require("../assets/notification.png")} />
            <Image source={require("../assets/coins.png")} />
            <Image
              source={require("../assets/profile.png")}
              onTouchEnd={()=>{
                navigation.navigate("Profile")
              }
              }
            />
          </View>
        </View>
        <View
          style={{
            height: 120,
            backgroundColor: "#FFD8BE",
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 50,
          }}
        >
          <Image source={require("../assets/Owl.png")} style={styles.owl} />
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Sections
          </Text>
        </View>
        <ScrollView
          style={{
            height: 520,
            gap: 2
          }}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground source={require('../assets/fundamentals.png')} style={{
            resizeMode: 'cover',
            height: 120,
            marginBottom: 10,
            justifyContent: 'center'
          }}><Text style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '800',
            color: 'white'
          }}>FUNDAMENTALS</Text></ImageBackground>

          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate("Rights")

          }
          }>
            <ImageBackground source={require('../assets/map_basic.png')} style={{
              resizeMode: 'cover',
              height: 120,
              marginBottom: 10,
              justifyContent: 'center'
            }}><TouchableWithoutFeedback onPress={() => {
              navigation.navigate("Rights")

            }
            }><Text style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: 'white'
            }}>RIGHTS</Text></TouchableWithoutFeedback></ImageBackground></TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate("Property")

          }
          }>
            <ImageBackground source={require('../assets/property.png')} style={{
              resizeMode: 'cover',
              height: 120,
              marginBottom: 10,
              justifyContent: 'center'
            }}><TouchableWithoutFeedback onPress={() => {
              navigation.navigate("Property")

            }
            }><Text style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: 'white'
            }}>PROPERTY</Text></TouchableWithoutFeedback></ImageBackground></TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate("Commercial")

          }
          }>
            <ImageBackground source={require('../assets/commercial.png')} style={{
              resizeMode: 'cover',
              height: 120,
              marginBottom: 10,
              justifyContent: 'center'
            }}><TouchableWithoutFeedback onPress={() => {
              navigation.navigate("Commercial")

            }
            }><Text style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: 'white'
            }}>COMMERCIAL</Text></TouchableWithoutFeedback></ImageBackground></TouchableWithoutFeedback>
        </ScrollView>
      </View>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  owl: {
    // position:'relative',
    top: 40,
    height: 80,
    width: 80,
  },
});
