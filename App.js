// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Alert, Image, ScrollView, Button, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './components/Homepage';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import NotificationScreen from './screens/NotificationScreen';
// import Login from './Login'

export default function App() {

  const Stack = createNativeStackNavigator();

  

  // console.log(StatusBar.currentHeight)
  return (
    // <Homepage></Homepage>
    // <Login></Login>
    // <NotificationScreen></NotificationScreen>
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown : false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


