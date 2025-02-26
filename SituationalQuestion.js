import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity} from 'react-native';
import Footer from './Footer';
import React, { useState } from 'react';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';

const QuestionCard = ({ image, question}) => {

    const [isImageMode, setIsImageMode] = useState(false);

    const toggleCard = () => {
            setIsImageMode(!isImageMode);
    };

    return (
    <View style={{ alignItems : 'center', marginTop : '10%'}}>
        <View style={{
            backgroundColor : isImageMode ? '#228A96' : '#FFD34B' ,
            width : '83%',
            height : '85%',
            borderRadius : 15,
            padding : 20,
            shadowColor: '#000', 
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 6,
            elevation: 8,
            position : 'relative',
        }}>
            {!isImageMode ? (
                <Text style={{
                    fontSize : 18,
                    opacity : 0.7,
                    textAlign : 'center'
                }}>{question}</Text>
            ) : 
            (   <Image source={image} style={{
                    alignSelf : 'center',
                    height : '100%',
                    width : '100%',
                    resizeMode : 'contain',
                    marginBottom : '5%',
                    marginTop : '5%'
                }}/>
            )}
            <TouchableOpacity
                onPress={toggleCard}
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    height : '100%',
                    width : '100%',
                    opacity : 0,
                    alignSelf : 'center'
                }}>
            </TouchableOpacity>
        </View>
    </View>
    );
};

export default function Learning() {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                paddingRight: 20,
                paddingLeft: 20
            }}>
                <View style={{
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 10,
                    flexDirection: "row"
                }}>
                    <Text style={{
                        fontSize: 25,
                        flex: 2,
                        color : '#232ED1',
                        fontWeight : 'bold'
                    }}>BHARAT VIDHI</Text>

                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        alignSelf: "stretch",
                        marginRight : '2%'
                    }}>
                        <Image source={require('./assets/notification.png')} />
                        <Image source={require('./assets/coins.png')} />
                        <Image source={require('./assets/profile.png')} />
                    </View>
                </View>
            </View>
            <QuestionCard
                question={'Q. Imagine you are a member of the Indian Constituent Assembly in 1947. The country has just gained independence, and you are tasked with helping to draft the Constitution of India. There is significant debate on whether the new Constitution should reflect only traditional Indian values or also draw from international sources like other constitutions. During a heated discussion, two factions emerge: one group argues that India should stick to its own customs and traditions, while the other group supports incorporating ideas from global constitutional frameworks to ensure modern governance and individual rights.'}
                image={source=require('./assets/constituent.jpg')}
            />
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});