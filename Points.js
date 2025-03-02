import {Text, View, Image,ImageBackground, } from 'react-native';
import Footer from './Footer'; 
import { Itim_400Regular, useFonts } from "@expo-google-fonts/itim";
const [fontsLoaded] = useFonts({
            Itim_400Regular,
});
const Points = ({point}) => {
    return (
    <View style={{
        top : '9%',
        right : '17%',
        position : 'absolute',
        zIndex: 10,
    }}>
        <ImageBackground source={require('./assets/points.png')} style={{
            width: 156,
            height: 71,
            justifyContent : 'center',
            alignItems: 'center',
        }}>
            <View style={{
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'center'
            }}>
            <Text style={{
                fontSize : 24,
                fontFamily : 'Itim_400Regular',
            }}>{point}</Text>
            <Image source={require('./assets/coins.png')} style={{
                resizeMode : "contain",
                height : 24,
                width : 24,
                marginLeft : '5%'
            }}/>
            </View>
        </ImageBackground>
    </View>
    );
};