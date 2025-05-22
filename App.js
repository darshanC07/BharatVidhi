// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Alert, Image, ScrollView, Button, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './components/Homepage';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import CivicMastery from './screens/CivicMastery';
import Archives from './screens/Archives';
import Product from './components/Product';
import Property from './screens/Property';
import Commercial from './screens/Commercial';
import Rights from './screens/Rights';
import Profile from './screens/Profile';
import Card from './components/Card';
import DragNDrop from './screens/DragNDrop';
import Learning from './screens/Learning';
import Gloss from './screens/Glossary';
import Fundamentals from './screens/Fundamentals';
import Welcome from "./screens/Welcome"
import Welcome2 from "./screens/Welcome2"
import LogoPage from "./screens/LogoPage"
import { LogBox } from "react-native";

// Ignore all logs
LogBox.ignoreAllLogs();

// import NotificationScreen from './screens/NotificationScreen';
// import Login from './Login'

export default function App() {

  const Stack = createNativeStackNavigator();

  

  // console.log(StatusBar.currentHeight)
  return (
    // <Homepage></Homepage>
    // <Login></Login>
    // <NotificationScreen></NotificationScreen>
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoPage">
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown : false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>
        <Stack.Screen name='CivicMastery' component={CivicMastery} options={{headerShown : false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
        <Stack.Screen name="Archives" component={Archives} options={{headerShown : false}}/>
        <Stack.Screen name="Product" component={Product} options={{headerShown : false}}/>
        <Stack.Screen name="Property" component={Property} options={{headerShown : false}}/>
        <Stack.Screen name="Rights" component={Rights} options={{headerShown : false}}/>
        <Stack.Screen name="Fundamental" component={Fundamentals} options={{headerShown : false}}/>
        <Stack.Screen name="Commercial" component={Commercial} options={{headerShown : false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown : false}}/>
        <Stack.Screen name="Learning" component={Learning} options={{headerShown : false}}/>
        <Stack.Screen name="DragNDrop" component={DragNDrop} options={{headerShown : false}}/>
        <Stack.Screen name="Glossary" component={Gloss} options={{headerShown : false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown : false}}/>
        <Stack.Screen name="Next" component={Welcome2} options={{headerShown : false}}/>
        <Stack.Screen name="LogoPage" component={LogoPage} options={{headerShown : false}}/>
      </Stack.Navigator>
     </NavigationContainer>
    // <DragNDrop></DragNDrop>
    // <CivicMastery></CivicMastery>
    // <Card height={500} width={300} eHeight={250} eWidth={200}></Card>
  );
}


