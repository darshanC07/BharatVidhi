import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, TouchableWithoutFeedback, PanResponder, Animated, Easing } from 'react-native';
import Footer from '../components/Footer';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { db } from "../firebaseSetup";
import { onValue, ref, get } from "firebase/database";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import CardDeck from '../components/CardDeck';
import Options from '../components/Options';


const propertyCards = ['#298EFF', '#FF8B73', '#32DAF9'];
const rightsCards = ['#A596FF', '#B4FF88', '#ABE3FF'];
const commercialCards = ['#44914C', '#EFB38E', '#FFD34B'];
const fundamentalsCards = ['#E6EFFD', '#F76565', '#AEE16B']; //to be finalized


export default function Learning() {
    const [moduleCards, setModuleCards] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);
    const [index, setIndex] = useState(0);
    const [length, setLength] = useState(0); // Ensure length is updated correctly
    const route = useRoute();
    const { map, node } = route.params;

    const [pan] = useState(new Animated.ValueXY());

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [null, { dx: pan.x }],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (e, gestureState) => {
            if (gestureState.dx > 100 && index > 0) {
                setIndex((prevIndex) => prevIndex - 1);
            } else if (gestureState.dx < -100 && index < length - 1) {
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                // Smoothly reset the pan position if no significant swipe
                Animated.timing(pan, {
                    toValue: { x: 0, y: 0 },
                    duration: 300, 
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    // Reset the card position when the index changes
    useEffect(() => {
        pan.setValue({ x: 0, y: 0 });
        Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300, 
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
        }).start();
    }, [index]);

    const ProgressBar = ({ progress }) => {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <View style={{
                    width: '90%',
                    height: 5,
                    backgroundColor: '#C9C0FF',
                    borderRadius: 5,
                    overflow: 'hidden',
                    marginTop: '5%',
                    marginBottom: '5%'
                }}>
                    <View style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#9381FF',
                    }} />
                </View>
            </View>
        );
    };

    const LearningCard = ({ image, description, title, bgcolor, options, correctOption }) => {
        return (
            <View style={{
                width: '100%',
                height: '100%',
                marginTop: '6%',
                // alig:'center'
                // marginRight:'9%'
            }}>
                <Animated.View
                    style={{
                        marginTop: '6%',
                        alignItems: 'center',
                        zIndex: 3,
                        position: 'absolute',
                        width: index < length - 1 ? '97%' : "101%",
                        height: '85%',
                        transform: [{ translateX: pan.x }],
                    }}
                    {...panResponder.panHandlers}
                >
                    <View style={{
                        backgroundColor: bgcolor,
                        width: '90%',
                        height: '85%',
                        borderRadius: 15,
                        padding: 20,
                        shadowColor: '#000',
                        shadowOffset: { width: 2, height: 4 },
                        shadowOpacity: 0.5,
                        shadowRadius: 6,
                        elevation: 8,
                        position: 'relative',
                    }}>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontFamily: 'Itim_400Regular'
                        }}>{title}</Text>
                        {image != 0 ?
                            <Image src={image} style={{
                                alignSelf: 'center',
                                height: 180,
                                width: 180,
                                resizeMode: 'contain',
                                // marginBottom: '5%',
                                // marginTop: '5%'
                            }} /> : <View></View>
                        }
                        <Text style={{
                            fontSize: 18,
                            opacity: 0.7,
                            textAlign: 'justify',
                            fontFamily: 'Itim_400Regular'
                        }}>{description}</Text>
                        {
                            options ?
                                <View style={{
                                    width: '90%',
                                    height: "70%",
                                    // flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around'

                                }}>
                                    {options.map((option, i) => (

                                        <TouchableWithoutFeedback style={{
                                            width: '95%',
                                            backgroundColor: '#8FDAFF',
                                            alignItems: 'center',
                                            alignSelf: 'center',
                                            flexDirection: 'row',
                                            borderRadius: 15,
                                            marginBottom: '5%',
                                            padding: 12,
                                            flexWrap: 'wrap'
                                        }} >
                                            <Options text={option} index=
                                                {i} currentCardIndex={index} isCorrect={correctOption}
                                                handleCorrect={(num) => { setIndex(num) }} ></Options>
                                        </TouchableWithoutFeedback>
                                    ))}</View> : <View></View>
                        }
                    </View>
                </Animated.View >
                {index < length - 1 ?
                    <View style={{
                        alignItems: 'center',
                        marginTop: '9%',
                        marginLeft: "10%",
                        zIndex: 1
                    }}>
                        <View style={{
                            backgroundColor: moduleCards[`card${index + 1}`].color,
                            width: '90%',
                            height: '85%',
                            borderRadius: 15,
                            padding: 20,
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 4 },
                            shadowOpacity: 0.5,
                            shadowRadius: 6,
                            elevation: 8,
                            position: 'relative',
                        }}></View>
                    </View>:<View></View>
            }
            </View>
        );
    };

    async function getData() {
        const cardRef = ref(db, `/modules/${map}/${node}/cards`);
        const snapshot = await get(cardRef);
        if (snapshot.exists()) {
            const values = snapshot.val();
            setLength(Object.keys(values).length);
            setModuleCards(values);
        }
    }

    useEffect(() => {
        getData();
    }, [map, node]);

    useEffect(() => {
        if (moduleCards) {
            setCurrentCard(moduleCards[`card${index}`]);
        }
    }, [moduleCards, index]);

    return (
        <View style={{ flex: 1 }}>
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
                        color: '#232ED1',
                        fontWeight: 'bold'
                    }}>BHARAT VIDHI</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        alignSelf: "stretch",
                        marginRight: '2%'
                    }}>
                        <Image source={require('../assets/notification.png')} />
                        <Image source={require('../assets/coins.png')} />
                        <Image source={require('../assets/profile.png')} />
                    </View>
                </View>
            </View>
            <ProgressBar progress={(index / length) * 100} />
            {currentCard && (
                <LearningCard
                    bgcolor={currentCard.color}
                    title={currentCard.title}
                    image={currentCard.imgURL || 0}
                    description={currentCard.data}
                    options={currentCard.isQueCard ? currentCard.options : null}
                    correctOption={currentCard.isQueCard ? currentCard.correct : null}
                />
            )}

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});