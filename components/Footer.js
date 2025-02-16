import { Text, View, Image } from 'react-native'

export default function Footer() {

    return (
        <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 70,
            backgroundColor: '#FFDCB9',
            position: 'absolute',
            bottom: 0,
            // top:0,
            left:0,
            right:0,
            padding:10
        }}>
            <Image source={require('../assets/icon1.png')}/>
            <Image source={require('../assets/icon2.png')}/>
            <Image source={require('../assets/icon3.png')}/>
            <Image source={require('../assets/icon4.png')}/>
            <Image source={require('../assets/icon5.png')}/>

        </View>
    )

}
