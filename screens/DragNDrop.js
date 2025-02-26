import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, Animated} from 'react-native';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
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

const Tray = () => {
    const [fontsLoaded] = useFonts({
        Itim_400Regular,
    });
    return (
    <View style={{
        width : '100%',
        marginTop : '45%',
        height : '80%',
        backgroundColor : 'rgba(201, 192, 255, 0.15)',
        position : 'absolute',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }}>
        <Text style={{
            color : '#7567CE',
            fontSize : 24,
            textAlign : 'center',
            fontFamily : 'Itim_400Regular',
            marginTop : '2%',
            position : 'absolute',
            top : 0
        }}>TOPIC</Text>
        <Text style={{
            color : '#7567CE',
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'Itim_400Regular',
        }}>DRAG</Text>
           <Text style={{
            color : '#7567CE',
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'Itim_400Regular',
        }}>ELEMENTS</Text>
           <Text style={{
            color : '#7567CE',
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'Itim_400Regular',
        }}>HERE TO</Text>
           <Text style={{
            color : '#7567CE',
            fontSize : 18,
            textAlign : 'center',
            fontFamily : 'Itim_400Regular',
        }}>CREATE</Text>
    </View>
    );
};

const BlocksTray = ({blocks}) => {
    const [expanded, setExpanded] = useState(false);
    const [widthAnim] = useState(new Animated.Value(50));

    const toggleTray = () => {
        Animated.timing(widthAnim, {
            toValue: expanded ? 50 : 285,
            duration: 200,
            useNativeDriver: false,
        }).start();

        setExpanded(!expanded);
    };

    return (
        <TouchableOpacity onPress={toggleTray} activeOpacity={0.8}>
        <Animated.View style={{
            width : widthAnim,
            height : '78%',
            borderTopLeftRadius : 10,
            borderBottomLeftRadius : 10,
            alignContent : 'space-evenly',
            backgroundColor : '#9381FF',
            alignSelf : 'flex-end',
            marginTop : '5%',
            padding : '4%',
        }}>
            {!expanded && (
                <View style={{
                    alignItems : 'center',
                }}>
                    <Image source={require('../assets/blocks.png')} style={{
                        marginBottom : '100%'
                    }}/>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        P
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        U
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        L
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        L
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                         T
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        O
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular'
                    }}>
                         O
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        P
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        E
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        N
                    </Text>
                </View>
                )}
            
            {expanded && (
                 <>
                <View style={{
                    flexDirection : 'row',
                }}>
                    <Image source={require('../assets/blocks.png')} style={{
                    }}/>
                    <Text style={{
                        color : '#FAF9FF',
                        textAlign : 'center',
                        marginLeft : '20%',
                        fontSize : 18,
                        fontFamily : 'Itim_400Regular'
                    }}>Element blocks</Text>
                </View>
                <View style={{
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    flexDirection : 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: '2%',
                }}>
                    {blocks.map((block, index) => (
                        <View key={index}>
                            {block}
                        </View>
                    ))}
                </View>
                <View style={{
                    justifyContent : 'flex-end',
                    flexGrow : 1
                }}>
                    <Text style={{
                        color : '#FAF9FF',
                        textAlign : 'center',
                        fontSize : 12,
                        fontFamily : 'Itim_400Regular',
                    }}>Drag elements belonging to the same category !</Text>
                </View>
                </>
       )}
       </Animated.View>
   </TouchableOpacity>
    );
};

const Block = ({text}) => {
    return (
        <TouchableOpacity style={{
            height : '15%',
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : '#FFEEDE',
            padding : '5%',
            borderRadius : 10,
            marginBottom : '5%'
        }}>
            <Text style={{
                fontFamily : 'Itim_400Regular',
                fontSize : 15,
                color : '#1D3557'
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

export default function DragNDrop() {
    const [fontsLoaded] = useFonts({
        PatrickHandSC_400Regular,
        Itim_400Regular,
    });

    const blocksArray = [
        <Block text={"Fundamental Rights"}/>,
        <Block text={"DPSP"}/>,
        <Block text={"Preamble"}/>,
        <Block text={"Amendments"}/>
    ]; 

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
                        <Image source={require('../assets/notification.png')} />
                        <Image source={require('../assets/coins.png')} />
                        <Image source={require('../assets/profile.png')} />
                    </View>
                </View>
            </View>
            <ProgressBar progress={78}/>
            <Text style={{
                fontSize : 24,
                textAlign : 'center',
                fontFamily : 'PatrickHandSC_400Regular',
                marginBottom : '4%',
            }}>LAW & LIBERTY LAB</Text>
            <Tray/>
            <BlocksTray blocks={blocksArray}/>
            <ScrollView contentContainerStyle={styles.scrollContainer} >
            <View style={{
                alignItems : 'center', 
                marginBottom : '15%'
            }}>

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
});