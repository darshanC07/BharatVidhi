// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Alert, Image, ScrollView, Button, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './components/Homepage';
// import Login from './components/Login_temp';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import SignUp from './screens/SignUp';


export default function App() {

  const Stack = createNativeStackNavigator();

  // console.log(StatusBar.currentHeight)
  return (
    // <Homepage></Homepage>
    // <Login></Login>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Homepage" 
        component={Homepage} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown : false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


