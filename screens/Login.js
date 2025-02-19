import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      const checkUserSession = async () => {
        const userSession = await AsyncStorage.getItem("userSession");
        if (userSession) {
          navigation.replace("Homepage");
        }
      };

      checkUserSession();

      return () => {};
    }, [])
  );

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch(
        "https://813prx4h-5000.inc1.devtunnels.ms/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("userSession", JSON.stringify(data.user));
        Alert.alert("Success", `${data.message}`);
      } else {
        Alert.alert("Error", data.error || "Invalid credentials");
      }
      if (data.redirect) {
        //   navigation.navigate(`${data.redirect}`);
        navigation.navigate("Homepage");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require("../assets/login/Rectangle_1.png")}
          style={styles.flag1}
        />
        <Image
          source={require("../assets/login/Rectangle_2.png")}
          style={styles.flag2}
        />
        <Image
          source={require("../assets/login/Rectangle_2.png")}
          style={styles.flag2}
        />
        <Image
          source={require("../assets/login/chakra1.png")}
          style={styles.bg1}
        />
        <Image
          source={require("../assets/login/chakra2.png")}
          style={styles.bg2}
        />
        <Image
          source={require("../assets/login/chakra3.png")}
          style={styles.bg3}
        />

        <View style={styles.borderContainer}>
          <Text style={styles.text}>BHARAT VIDHI</Text>
          <Text style={styles.logIn}>LOGIN</Text>

          <View style={styles.rectangleView}>
            <TextInput
              style={styles.fieldText}
              placeholder="Email-id"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.rectangleView}>
            <TextInput
              style={styles.fieldText}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.rectangleIcon} />

          <TouchableOpacity style={styles.proceedBox} onPress={handleLogin}>
            <Text style={styles.proceedText}>PROCEED</Text>
          </TouchableOpacity>

          <View style={styles.google}>
            <Text style={styles.googleText}>
              Sign Up using Google
              <Image
                source={require("../assets/login/Search.png")}
                style={styles.googleImage}
              ></Image>
            </Text>
          </View>
          <Text style={styles.toSignUp}>
            Don't have an account? <Text style={styles.signUp}>Sign up!</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  borderContainer: {
    width: "90%",
    height: "93%",
    borderWidth: 5,
    borderColor: "#FFDCB9",
    borderRadius: 10,
    padding: 20,
    marginTop: "10%",
    marginBottom: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 45,
    paddingTop: "18%",
    display: "flex",
    width: 200,
    fontWeight: "bold",
    color: "#232ED1",
    textAlign: "center",
    lineHeight: 50,
    textAlignVertical: "center",
    fontFamily: "monospace",
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
    paddingTop: "10%",
  },
  rectangleView: {
    borderRadius: 15,
    backgroundColor: "#ffeedd",
    width: "90%",
    height: "8%",
    opacity: 0.5,
    paddingTop: 20,
    marginBottom: 30,
  },
  fieldText: {
    fontSize: 15,
    color: "#242424",
    textAlign: "left",
    paddingLeft: 20,
    paddingBottom: 5,
    display: "flex",
    alignItems: "center",
  },
  proceedBox: {
    height: "5%",
    width: "30%",
    backgroundColor: "#B8B8FF",
    marginTop: "5%",
    opacity: 0.5,
    borderRadius: 10,
    borderColor: "#B8B8FF",
    borderWidth: 2,
  },
  proceedText: {
    textAlign: "center",
    color: "#232ED1",
    paddingTop: "8%",
    fontWeight: "bold",
  },
  google: {
    backgroundColor: "rgba(189, 184, 179, 0.125)",
    width: "70%",
    height: "4.5%",
    marginTop: "8%",
    opacity: 1,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  googleText: {
    textAlign: "center",
    verticalAlign: "middle",
    opacity: 0.5,
  },
  googleImage: {
    alignSelf: "flex-end",
    verticalAlign: "middle",
    width: 30,
    height: 30,
    opacity: 1,
    zIndex: 10,
  },
  toSignUp: {
    marginTop: 20,
  },
  signUp: {
    textDecorationLine: "underline",
  },
  flag1: {
    top: "13%",
    position: "absolute",
    resizeMode: "contain",
  },
  flag2: {
    top: "20%",
    position: "absolute",
    resizeMode: "contain",
  },
  bg1: {
    position: "absolute",
    right: 0,
    top: 0,
    resizeMode: "contain",
    opacity: 0.7,
  },
  bg2: {
    position: "absolute",
    right: 0,
    top: 70,
    resizeMode: "contain",
    opacity: 0.95,
  },
  bg3: {
    position: "absolute",
    left: 0,
    bottom: 0,
    resizeMode: "contain",
    opacity: 0.8,
  },
});
