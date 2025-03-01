import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Dimensions,
    BackHandler,
    ImageBackground,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { io } from "socket.io-client";
import { db } from "../firebaseSetup";
import { onValue, ref, get } from "firebase/database";
import Card from "../components/Card";
import Result from "../components/Result";
import CardDeck from "../components/CardDeck";
import InvertedCard from "../components/InvertedCard"
import OtherPlayerCard from "../components/OtherPlayerCard"

export default function CivicMastery() {
    const navigation = useNavigation();

    const [orientation, setOrientation] = useState(null);
    const [screenHeight, setHeight] = useState(Dimensions.get("window").height);
    const [screenWidth, setWidth] = useState(Dimensions.get("window").width);
    const [user, setUser] = useState(null);
    const [socket, setSocket] = useState(null);
    const [cardDeck, setCardDeck] = useState([]);
    const [connectedPlayer, setConnectedPlayer] = useState(null)
    const [playerCount, setPlayerCount] = useState(0)
    const [secondPlayerCardCount, setSecondPlayerCardCount] = useState(0)
    const [thirdPlayerCardCount, setThirdPlayerCardCount] = useState(0)
    const [fourthPlayerCardCount, setFourthPlayerCardCount] = useState(0)
    const [clicledCard, setCLickedCard] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [totalPoints, setTotalPoints] = useState(0)
    const [clickedAnswer, setClickedAnswer] = useState(false)
    const [isCorrect, setCorrect] = useState(false)
    const [isWrong, setWrong] = useState(false)
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(10);
    const [isTimeRemained, setTimeRemained] = useState(false)
    const [gameOver, setGameOver] = useState(false);
    const timeEndedRef = useRef(false);
    const [resultComponent, setResultComponent] = useState(null)
    const [result, isResult] = useState(false)
    const newCardListenerRef = useRef(false);
    const [currectTurn, setCurrentTurn] = useState(null)
    const [currentUserName, setCurrentUserName] = useState(null)
    const hasGameStarted = useRef(false);

    // Get user session from AsyncStorage
    useEffect(() => {
        const fetchUser = async () => {
            let userSession = await AsyncStorage.getItem("userSession");
            if (!userSession) {
                navigation.replace("Login");
                return;
            }
            userSession = JSON.parse(userSession);
            console.log("User session:", userSession);
            setUser(userSession);
        };

        fetchUser();
    }, []);

    // Fetch card deck data from Firebase when user is set
    useEffect(() => {
        if (!user) return;

        const fetchCardDeck = async () => {
            try {
                const userRef = ref(db, `/civicMastery/temp/${user.uid}`);
                const snapshot = await get(userRef);

                if (snapshot.exists()) {
                    const values = snapshot.val();
                    console.log("Fetched values:", values);
                    setCardDeck(Object.values(values.cardDeck || {}));
                    hasGameStarted.current = true; // Mark game as started
                } else {
                    setCardDeck([]); // Fallback in case no data exists
                }

                // Listen for real-time updates
                onValue(userRef, (snapshot) => {
                    if (snapshot.exists()) {
                        setCardDeck(Object.values(snapshot.val().cardDeck || {}));
                    }
                });
            } catch (error) {
                console.error("Error fetching card deck:", error);
            }
        };

        fetchCardDeck();
    }, [user]);

    // Check for winning condition
    useEffect(() => {
        if (hasGameStarted.current && cardDeck.length === 0) {
            Alert.alert("You Won");
            hasGameStarted.current = false; // Reset for the next game
        }
    }, [cardDeck]);

    // WebSocket Connection
    useEffect(() => {
        const websocket = io("https://9tj0pwqw-5000.inc1.devtunnels.ms/");
        setSocket(websocket);

        // const roomData = { userName: "Darshan", room: "temp", uid: user.uid };
        websocket.on("connect", () => {
            console.log("Connected to WebSocket");
            // websocket.emit("join_room", roomData);
        });

        return () => {
            websocket.disconnect(); // Cleanup on unmount
        };
    }, []);

    //funct for setting card counts of players
    function playerCardCount(data, i) {
        let playersConnected;
        if (i) {
            playersConnected = data;
        } else {
            playersConnected = data["playersConnected"];
        }
        console.log("Player connected data before:", playersConnected);

        // Remove the current user from the list
        for (let i = 0; i < playersConnected.length; i++) {
            if (playersConnected[i]["uid"] === user.uid) {
                playersConnected.splice(i, 1);
                break;
            }
        }
        console.log("Player connected data after:", playersConnected);

        // Update card counts for other players
        for (let i = 0; i < playersConnected.length; i++) {
            if (i == 0) {
                console.log("Updating second player card count:", playersConnected[i]["cardCount"]);
                setSecondPlayerCardCount(playersConnected[i]["cardCount"]);
            } else if (i == 1) {
                setThirdPlayerCardCount(playersConnected[i]["cardCount"]);
            } else if (i == 2) {
                setFourthPlayerCardCount(playersConnected[i]["cardCount"]);
            }
        }
    }

    useEffect(() => {
        console.log("Updated cardDeck count:", cardDeck.length);
    }, [cardDeck]);


    // Join WebSocket room when socket and user are set
    // let checkAnswer;
    function checkAnswer(correctOption, clickedOption) {
        console.log("now my deck : ", cardDeck.length)
        console.log("Correct:", correctOption, "Clicked:", clickedOption);

        if (correctOption == clickedOption) {
            console.log("Correct Answer! Points:", totalPoints + 5);
            setTotalPoints(prevPoints => prevPoints + 5);
            setCorrect(true)
            isResult(true)
            setResultComponent(<Result isCorrect={true} isWrong={false}></Result>)
            // setClicked(false);
        } else {
            console.log("Wrong Answer!");
            setWrong(true)
            // setGameOver(true)
            isResult(true)
            setResultComponent(<Result isCorrect={false} isWrong={true}></Result>)
        }

        setClickedAnswer(false);
    }

    useEffect(() => {
        if (isWrong || isTimeRemained) {
            setGameOver(true);
        }
    }, [isWrong, isTimeRemained]);

    useEffect(()=>{
        if(isCorrect){
            setClicked(false)
            setRunning(false)
            setWrong(false)
        }
    },[isCorrect])
    useEffect(() => {
        if (gameOver) {
            console.log("before adding : ", cardDeck.length)
            socket.emit("getCard", { uid: user.uid, cardCount: cardDeck.length });

            setWrong(false);
            setTimeRemained(false);
            setRunning(false);
            setCorrect(false);
            setClicked(false);
            setGameOver(false); // Reset game over flag
        }
    }, [gameOver]);

    useEffect(() => {
        if (!socket || !user) return;

        const roomData = { userName: user.name, room: "temp", uid: user.uid };
        socket.emit("join_room", roomData);

        socket.on("playerJoined", (data) => {
            console.log("data ", data)
            playerCardCount(data)
        });
        return () => {
            socket.off("playerJoined"); // Cleanup event listener on unmount
        };
    }, [socket, user, clickedAnswer]);

    useEffect(() => {
        if (!socket || !user) return;
        socket.on("playerJoined", (data) => {
            console.log("data ", data)
            playerCardCount(data)
        });

        socket.on("otherPlayersCard", (data) => {
            playerCardCount(data["roomData"], 1)
            let cardData = data["cardData"]
            console.log("my cards : ", cardDeck.length)
            setClicked(true)
            setTime(10)
            setRunning(true)
            setCLickedCard(
                <TouchableHighlight onPress={() => {
                    setClicked(false)
                }}><OtherPlayerCard cardheight={250} cardwidth={150} title={cardData.name} correctOption={cardData.correctAnswer} question={cardData.content} eHeight={20} eWidth={20} options={cardData.isQuestion == "True" ? cardData.options : 0} handleOptionClick={(j) => { setClickedAnswer(true); checkAnswer(cardData.correctAnswer, j) }}></OtherPlayerCard></TouchableHighlight>
            )
        })

        socket.on("currentTurn", (data) => {
            console.log("Received currentTurn event:", data);
            setCurrentTurn(data.currectTurn);
            setCurrentUserName(data.currentPlayerName);
        });

        if (!newCardListenerRef.current) {
            socket.on("newCard", (data) => {
                playerCardCount(data["roomData"], 1)

                if (data["playerData"]["uid"] == user.uid) {
                    console.log("currect cards : ", cardDeck)
                    setCardDeck((prevDeck) => [...prevDeck, data["newCard"][1]]);
                    // tempCardDeck.push(data["newCard"])
                    console.log("after cards : ", cardDeck)
                    // setCardDeck(cardDeck)

                }
            });
            newCardListenerRef.current = true
        }
    }, [socket, cardDeck, currectTurn])
    // Handle screen orientation
    useEffect(() => {
        async function changeScreenOrientation() {
            let currentOrientation = await ScreenOrientation.getOrientationAsync();
            setOrientation(currentOrientation);

            if (currentOrientation === 1) {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
                setHeight(Dimensions.get("window").width);
                setWidth(Dimensions.get("window").height);
            } else {
                setHeight(Dimensions.get("window").height);
                setWidth(Dimensions.get("window").width);
            }
        }

        changeScreenOrientation();
    }, []);

    // Handle back button press
    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", async () => {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
            navigation.replace("Homepage");
            return true;
        });

        return () => backHandler.remove();
    }, []);

    //for getting connected users
    useEffect(() => {
        if (!user) return;

        const roomRef = ref(db, "/civicMastery/temp");

        // Listen for real-time changes in the game room
        const unsubscribe = onValue(roomRef, (snapshot) => {
            if (!snapshot.exists()) {
                setConnectedPlayer([]);
                setPlayerCount(0);
                setSecondPlayerCardCount(0);
                setThirdPlayerCardCount(0);
                setFourthPlayerCardCount(0);
                return;
            }

            const roomValues = Object.values(snapshot.val());
            for (let i = 0; i < Object.values(snapshot.val()).length; i++)
                setConnectedPlayer(roomValues);
            // setPlayerCount(roomValues.length);

        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, [user]); // Run only when `user` changes

    function handleCancel() {
        setClicked(false)
    }
    function handleOK(data, i) {
        console.log("Current cardDeck:", cardDeck);

        let currentCardCountData = {
            "uid": user.uid,
            "cardCount": cardDeck.length - 1
        };

        const newDeck = cardDeck.filter((_, index) => index !== i);
        setCardDeck(newDeck);

        console.log("Clicked card data:", data);
        socket.emit("cardPlayed", { currentCardCountData, data });

        console.log("After handleOK - cardDeck:", newDeck);
        setClicked(false);
    }


    function handleCardClick(i) {
        console.log("clicked")
        setClicked(true)
        setCLickedCard(
            <TouchableHighlight ><InvertedCard cardheight={250} cardwidth={150} title={cardDeck[i].name} correctOption={cardDeck[i].correctAnswer} question={cardDeck[i].content} eHeight={20} eWidth={20} options={cardDeck[i].isQuestion == "True" ? cardDeck[i].options : 0} handleCancel={handleCancel} handleOK={() => handleOK(cardDeck[i], i)}></InvertedCard></TouchableHighlight>
        )
    }

    //timer
    useEffect(() => {
        let interval;

        if (running && time > 0) {
            interval = setInterval(() => setTime(t => t - 1), 1000);
        }

        return () => clearInterval(interval);
    }, [running, time]);

    useEffect(() => {
        if (time === 0 && running && !timeEndedRef.current) {
            timeEndedRef.current = true;
            setRunning(false);
            setClicked(false);
            setTimeRemained(true);
            setTimeout(() => {
                timeEndedRef.current = false;
            }, 100);
        }
    }, [time, running]);

    useEffect(() => {
        if (result) {
            // Set a timeout to hide the resultComponent after 2 seconds
            const timeout = setTimeout(() => {
                isResult(false); // Hide the resultComponent
            }, 2000); 

            return () => clearTimeout(timeout);
        }
    }, [result]); // Run this effect whenever `result` changes

    // Render the resultComponent conditionally
    <View style={result ? styles.resultDisplay : { display: 'none' }}>
        {resultComponent}
    </View>
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.turnMessageContainer}>
                <Text style={styles.turnMessageText}>
                    {currectTurn === user?.uid ? "Your turn" : `${currentUserName} is playing`}
                </Text>
            </View>
            <StatusBar hidden />
            <View style={clicledCard && clicked ? {
                // flex: 1,
                backgroundColor: 'white',
                height: screenHeight,
                width: Dimensions.get('window').width + StatusBar.currentHeight,
                position: 'absolute',
                zIndex: 1,
                opacity: 0.5,
            } : {
                // flex: 1,
                backgroundColor: 'white',
                height: screenHeight,
                width: Dimensions.get('window').width + StatusBar.currentHeight,
                position: 'absolute',
                zIndex: 1,
                opacity: 0.5,
                display: 'none'
            }}></View>

            <View>
                <ImageBackground source={require('../assets/civicMastery/gameBg.png')} style={{
                    height: screenHeight + 10,
                    width: screenWidth + 55
                }}></ImageBackground>
                <View style={styles.bench}>
                    <Image source={require('../assets/civicMastery/bench.png')} style={styles.bench}></Image>

                    <View style={{
                        width: screenWidth - 20,
                        alignItems: 'center'
                    }}>
                        <View style={styles.cardContainer}>
                            {cardDeck.map((card, i) => {
                                const angle = (i - (cardDeck.length - 1) / 2) * 4; // Reduced angle for subtler curve
                                const offsetX = (i - (cardDeck.length - 1) / 2) * 74; // More horizontal spacing

                                return (
                                    <TouchableHighlight
                                        key={i}
                                        style={{
                                            position: "absolute",
                                            transform: [
                                                { rotate: `${angle}deg` },
                                                { translateX: offsetX },
                                                { translateY: Math.abs(angle) * 2.4 } // Adds vertical arc effect
                                            ],
                                            zIndex: i + 1, // Makes cards overlap correctly
                                            shadowColor: "#000",
                                            shadowOffset: { width: 0, height: 2 },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,
                                            elevation: 5,
                                        }}
                                        underlayColor="transparent"
                                        onPress={currectTurn === user.uid ? () => handleCardClick(i) : null} // Only allow press if it's the current player's turn
                                        disabled={currectTurn !== user.uid}
                                    >
                                        <Card
                                            cardheight={180}
                                            cardwidth={120}
                                            title={card.name}
                                            eHeight={20}
                                            eWidth={20}
                                        />
                                    </TouchableHighlight>
                                );
                            })}
                        </View>
                    </View>
                </View>
                <View >
                    <Image source={require('../assets/civicMastery/rightBench.png')} style={{
                        position: 'absolute',
                        left: '85%',
                        bottom: '10%',
                        opacity: 0.7
                    }}></Image>
                    <View style={{
                        width: screenHeight,
                        alignContent: 'center',
                        position: 'absolute',
                        left: '80%',
                        bottom: '50%',
                        transform: [{ rotate: '0deg' }]
                    }}>
                        <View style={styles.rightCardContainer}>
                            <CardDeck count={secondPlayerCardCount} degree="270deg"></CardDeck>
                        </View>
                    </View>
                </View>

                <View >
                    <Image source={require('../assets/civicMastery/leftBench.png')} style={{
                        position: 'absolute',
                        // left:'85%',
                        bottom: '0.1%',
                        opacity: 0.7
                    }}></Image>
                    <View style={{
                        width: screenHeight,
                        alignContent: 'center',
                        position: 'absolute',
                        // left: '80%',
                        bottom: '50%',
                        transform: [{ rotate: '0deg' }]
                    }}>
                        <View style={styles.leftCardContainer}>
                            <CardDeck count={thirdPlayerCardCount} degree="90deg"></CardDeck>
                        </View>
                    </View>
                </View>

                <Image source={require('../assets/civicMastery/topBench.png')} style={{
                    position: 'absolute',
                    // left:'85%',
                    // justifyContent:'center',
                    top: 0,
                    left: '25%',
                    bottom: '0.1%',
                    opacity: 0.7
                }}></Image>
            </View>
            <View style={clicked && clicledCard ? styles.clickedCardStyle : { display: 'none' }}>
                {clicledCard}
            </View>
            {/* <TouchableWithoutFeedback onPress={() => { isResult(false) }}> */}
            <View style={result ? styles.resultDisplay : { display: 'none' }}>
                {resultComponent}
            </View>
            {/* </TouchableWithoutFeedback> */}
            <View style={running ? styles.timer : { display: 'none' }}> {running && <Text style={{ fontSize: 24 }}>Time: {time}s</Text>} </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // backgroundColor: 'lightblue'
    },
    gameBg: {
        height: Dimensions.get('window').height + 10,
        width: Dimensions.get('window').width + 55
    },
    bench: {
        position: 'absolute',
        bottom: 0,
        left: '3.6%',
    },
    cardContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: "5%",
        height: 200,
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    rightCardContainer: {
        // alignItems: 'center',
        // flexDirection: 'column',
        // left:10,
        bottom: "80%",
        // right: "5%"
        // alignItems: 'center'
    },
    leftCardContainer: {
        // alignItems: 'center',
        // flexDirection: 'column',

        bottom: "80%",
        // alignItems: 'center'
    },
    clickedCardStyle: {
        position: 'absolute',
        zIndex: 50,
        // top: 20,
        bottom: "40%",
        left: "40%"

    },
    resultDisplay: {
        position: 'absolute',
        zIndex: 12,
        // top: 20,
        bottom: "40%",
        left: "40%"

    },
    timer: {
        position: 'absolute',
        zIndex: 15,
        bottom: "40%",
        left: "45%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    turnMessageContainer: {
        // width:250,
        position: 'absolute',
        top: 130, // Adjust the position as needed
        left: '39%',
        // right: 0,
        alignItems: 'center',
        zIndex: 20, // Ensure it's above other elements
    },
    turnMessageText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', // Adjust the color as needed
        textAlign: 'center',
    },

});