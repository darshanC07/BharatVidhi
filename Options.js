import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity} from 'react-native';
import Footer from './Footer';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { LexendGiga_400Regular } from "@expo-google-fonts/lexend-giga";
import { Lexend_800ExtraBold } from "@expo-google-fonts/lexend";
import { Itim_400Regular } from "@expo-google-fonts/itim";

const ProgressBar = ({ progress }) => {
    return (
    <View style={{
        marginBottom : '5%',
        alignItems: 'center'
        }}>
        <View style={{
            width: '90%',
            height: 5,
            backgroundColor: '#C9C0FF',
            borderRadius: 5,
            overflow: 'hidden',
            marginTop : '5%',
        }}>
        <View style={{ 
            width: `${progress}%`,
            height : '100%',
            backgroundColor : '#9381FF',
        }}/>
      </View>
      </View>
    );
  };


const Option = ({text, index, isCorrect, handleSelection}) => {
    const [fontsLoaded] = useFonts({
        LexendGiga_400Regular,
        Lexend_800ExtraBold
    });
    return (
        <TouchableOpacity style={{
            width : '95%',
            backgroundColor : '#8FDAFF',
            alignItems : 'center',
            alignSelf : 'center',
            flexDirection : 'row',
            borderRadius : 15,
            marginBottom : '5%',
            padding : 12,
            flexWrap : 'wrap'
        }}
        onPress={() => handleSelection(isCorrect)}>
            <View style={{
                marginLeft : '2%',
            }}><Text style={{
                fontSize : 30,
                fontWeight : '800',
                color : '#1D3557',
                fontFamily : 'Lexend_800ExtraBold'
            }}>{index}</Text>
            </View>
            <Text style={{
                fontSize : 18,
                color : '#1D3557',
                textAlign : 'justify',
                marginLeft : '6%',
                flexShrink : 1,
                maxWidth : '80%',
                fontFamily : 'LexendGiga_400Regular'
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

export default function Options() {
    
    const [fontsLoaded] = useFonts({
        PatrickHandSC_400Regular,
        Itim_400Regular,
        Lexend_800ExtraBold,
    });

    const [result, setResult] = useState(null);

    const handleSelection = (isCorrect) => {
        setResult(isCorrect ? "correct" : "wrong");
    };

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
            <ProgressBar progress={38}/>
            <Text style={{
                color : '#4732C9',
                fontSize : 24,
                textAlign : 'center',
                marginBottom : '4%',
                fontFamily : 'PatrickHandSC_400Regular'
            }}>RIGHTS INTO REALITY</Text>
            {result !== null && (
                <View style={[
                    styles.resultContainer,
                    result === "correct" ? styles.correctBg : styles.wrongBg
                ]}>
                    <Image 
                        source={result === "correct" 
                            ? require('./assets/correct.png') 
                            : require('./assets/wrong.png')} 
                        style={{
                            width: 21,
                            height: 21,
                            marginRight: 10,
                        }}
                    />
                    <Text style={styles.resultMessage}>
                        {result === "correct" ? "Right Answer!! Good to go!!" : " Wrong Answer!! Try Harder!!"}
                    </Text>
                </View>
            )}
            <ScrollView contentContainerStyle={styles.scrollContainer} >
            <View style={{
                alignItems : 'center', 
                marginBottom : '15%'
            }}>
                <Option index={'A.'} text={'The Constitution was based entirely on traditional Indian customs and avoided any influence from foreign constitutions to ensure an indigenous identity.'} isCorrect={false} handleSelection={handleSelection}/>
                <Option index={'B.'} text={'The framers of the Constitution incorporated ideas from several foreign constitutions, such as the US Constitution for Fundamental Rights and the British Constitution for Parliamentary governance, while also integrating Indian values like social justice and equality.'} isCorrect={true} handleSelection={handleSelection} />
                <Option index={'C.'} text={'The Constituent Assembly primarily followed the structure of the Government of India Act of 1935 without making significant changes or drawing from any foreign constitutions.'} isCorrect={false} handleSelection={handleSelection}/>
                <Option index={'D.'} text={'The framers rejected both Indian traditions and international constitutional models to create an entirely new and unprecedented system of governance for India.'} isCorrect={false} handleSelection={handleSelection} />
            </View>
            </ScrollView>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow : 1,
        padding : 15,
    },
    resultMessage : {
        fontSize : 12,
        color : '#1d3557',
        textAlign : 'center',
        fontFamily : 'Itim_400Regular'
    },
    resultContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 20,
        marginHorizontal: 20,
        width: '90%',
        alignSelf: 'center',
        marginBottom : '5%'
    },
    correctBg: {
        backgroundColor: 'rgba(25, 255, 0, 0.15)',
    },
    wrongBg: {
        backgroundColor: 'rgba(255, 9, 9, 0.15)',
    },
});