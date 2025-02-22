// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Alert, Image, ScrollView, Button, Platform, StatusBar } from 'react-native';
import Homepage from './components/Homepage';
// import Login from './components/Login_temp';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  
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
  );
}


