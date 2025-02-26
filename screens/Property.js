import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Platform, PixelRatio, ScrollView, ImageBackground } from 'react-native';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

export default function Property() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        height: 50,
        flexDirection: "row",
        verticalAlign: 'top',
        marginTop: '13%',
        paddingRight: 20,
        paddingLeft: 20
      }}>
        <Text style={{
          fontSize: 25,
          color: '#232ED1',
          fontWeight: 'bold',
          textAlign: 'left',
        }}>BHARAT VIDHI</Text>

        <View style={{
          flex: 1,
          justifyContent: 'space-around',
          flexDirection: "row",
          alignSelf: "stretch",
          marginLeft: '16%'
        }}>
          <Image source={require('../assets/notification.png')} styles={{ marginRight: '3%' }}></Image>
          <Image source={require('../assets/coins.png')}></Image>
          <Image source={require('../assets/profile.png')}></Image>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <ImageBackground source={require('../assets/property_3.png')} style={styles.each}>
          <TouchableOpacity onPress={() => navigation.navigate("Learning_1")}>
            <View style={[styles.point, { left: 200, top: 190 }]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Learning_1")}>
            <View style={[styles.point, { right: 40, top: 380 }]}>
            </View>
          </TouchableOpacity></ImageBackground>
        <ImageBackground source={require('../assets/property_2.png')} style={styles.each}>
          <TouchableOpacity onPress={() => {
            console.log("clicked"); navigation.navigate('Learning', {
              map: "property",
              node: 3
            })
          }}>
            <View style={[styles.point, { left: 185, top: 80 }]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log("clicked"); navigation.navigate('Learning', {
              map: "property",
              node: 2
            })
          }}>
            <View style={[styles.point, { right: 30, top: 300 }]}>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/property_1.png')} style={styles.each}>
          <TouchableOpacity onPress={() => {
            console.log("clicked"); navigation.navigate('Learning', {
              map: "property",
              node: 1
            })
          }}>
            <View style={[styles.point, { left: 185, top: 20 }]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log("clicked"); navigation.navigate('Learning', {
              map: "property",
              node: 0
            })
          }}>
            <View style={[styles.point, { right: 90, top: 185 }]}>
            </View>
          </TouchableOpacity>
        </ImageBackground>

      </ScrollView>
      <Footer></Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  each: {
    width: 340,
    height: 792,
    resizeMode: 'cover'
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  scroll: {
    width: 340,
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '22%'
  },
  point: {
    height: 180,
    width: 180,
    backgroundColor: 'white',
    borderRadius: 100,
    opacity: 0.01
  },
});
