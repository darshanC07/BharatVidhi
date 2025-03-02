import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
    const [moduleCards, setModuleCards] = useState(null)
    const [currentCard, setCurrentCard] = useState(null)
    const [index, setIndex] = useState(0)
    const route = useRoute();
    const { map, node } = route.params
    console.log(map, node)

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
        // const [fontsLoaded] = useFonts({
        //         LexendGiga_400Regular,
        //         Lexend_800ExtraBold
        //     });
        // console.log(options)
        // console.log(correctOption)
        return (
            <View style={{ alignItems: 'center', marginTop: '6%' }}>
                <View style={{
                    backgroundColor: bgcolor,
                    width: '83%',
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
                                        width : '95%',
                                        backgroundColor : '#8FDAFF',
                                        alignItems : 'center',
                                        alignSelf : 'center',
                                        flexDirection : 'row',
                                        borderRadius : 15,
                                        marginBottom : '5%',
                                        padding : 12,
                                        flexWrap : 'wrap'
                                    }} >
                                        {/* <View style={{
                                            height: 60,
                                            width: "100%",
                                            padding: 10,
                                            backgroundColor: "lightblue",
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // marginBottom: 20
                                        }}><Text key={i} style={{
                                            fontSize: 15,
                                            color: "black"
                                        }}>{option}</Text></View> */}
                                        <Options text={option} index=
                                        {i} currentCardIndex={index} isCorrect={correctOption}
                                        handleCorrect={(num)=>{setIndex(num)}} ></Options>
                                        </TouchableWithoutFeedback>
                                ))}</View> : <View></View>
                    }
                    <TouchableOpacity
                        onPress={() => {
                            if (index > 0) {
                                console.log("previous");
                                setIndex(index => index - 1)
                            }
                        }}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            marginTop: '6%',
                            height: '100%',
                            width: '40%',
                            opacity: 0
                        }}>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if (index < Object.values(moduleCards).length) {
                                console.log("next")
                                setIndex(index => index + 1)

                            }
                        }}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            marginTop: '6%',
                            marginLeft: '75%',
                            height: '100%',
                            width: '40%',
                            opacity: 0
                        }}>

                    </TouchableOpacity>

                </View>
            </View >
        );
    };
    const [length,setlength] = useState(0)

    async function getData() {
        
        const cardRef = ref(db, `/modules/${map}/${node}/cards`);
        const snapshot = await get(cardRef);
        if (snapshot.exists()) {
            const values = snapshot.val();
            // console.log("values : ", values)
            setlength(values.length)
            setModuleCards(values)
        }

    }

    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        if (moduleCards) {
            setCurrentCard(moduleCards[`card${index}`])
        }
    }, [moduleCards, index])
    // const [fontsLoaded] = useFonts({
    //     PatrickHandSC_400Regular,
    //     Itim_400Regular,
    // });
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
            <ProgressBar progress={(index/length)*100}></ProgressBar>
            {/* <Text style={{
                fontSize: 18,
                textAlign: 'center',
                fontFamily: 'PatrickHandSC_400Regular'
            }}>Heading</Text> */}
            {currentCard ?
                <LearningCard
                    bgcolor={currentCard.color}
                    title={currentCard.title}
                    image={currentCard.imgURL ? currentCard.imgURL : 0}
                    description={currentCard.data}
                    options={currentCard.isQueCard ? currentCard.options : null}
                    correctOption={currentCard.isQueCard ? currentCard.correct : null}
                /> : null

            }
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});