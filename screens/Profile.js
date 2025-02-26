
import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, Button, TouchableWithoutFeedback } from 'react-native';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Streaks = 0;
const level = 0;
const badge = 0;

const Details = ({ name, age, email }) => {
    return (
        <View >
            <Text style={styles.info}>{name}</Text>
            <Text style={styles.info}>{age}</Text>
            <Text style={styles.info}>{email}</Text>
        </View>


    );
};

export default function Profile() {
    const [user,setUser] = useState(null)
    const navigation = useNavigation()
    useFocusEffect(
        React.useCallback(() => {
          const fetchUser = async () => {
            const userSession = await AsyncStorage.getItem("userSession");
            if (!userSession) {
              navigation.replace("Login");
            } else {
              console.log(JSON.parse(userSession));
              setUser(JSON.parse(userSession));
            }
          };
    
          fetchUser();
    
          return () => { };
        }, [])
      );

    const handleLogout = async () => {
        await AsyncStorage.removeItem("userSession");
        console.log("logged out")
        navigation.replace("Login");
    };
    return (
        <SafeAreaView style={{
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
            <ScrollView >
                <View style={styles.bg}>
                    <ImageBackground source={require('../assets/profile_bg.png')} style={styles.bg}>
                        <Image source={require('../assets/Profile_page.png')} style={styles.pfp}></Image>
                        <View style={styles.data}>
                            <Details name={user?user.name:"demo"} age={'17'} email={user?user.name:"abc@gmail.com"}></Details>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <View style={styles.block}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center', top: 20 }}>{Streaks}</Text>
                                    <Image source={require('../assets/Fire.png')} style={{ alignSelf: 'center', top: '30%' }} />
                                </View>
                                <View style={styles.block}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center', top: 20 }}>{level}</Text>
                                    <Image source={require('../assets/Scoring.png')} style={{ alignSelf: 'center', top: '30%' }} />
                                </View>
                                <View style={styles.block}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center', top: 20 }}>{badge}</Text>
                                    <Image source={require('../assets/Premium Badge.png')} style={{ alignSelf: 'center', top: '30%' }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 85, top: 105, paddingLeft: 28 }}>
                                <Text style={{ fontSize: 12, color: '#A4AED3' }}>Streaks</Text>
                                <Text style={{ fontSize: 12, color: '#A4AED3' }}>Level</Text>
                                <Text style={{ fontSize: 12, color: '#A4AED3' }}>Badges</Text>
                            </View>
                            <View style={styles.score}>
                                <Text style={{ fontSize: 24, marginRight: 200, marginTop: 40 }}>Statistics</Text>

                                <View>
                                    <Text>User stats</Text>
                                </View>
                                <View>
                                    <Text>Leader board stats</Text>
                                </View>
                                <View>
                                    <Text>Civic mastery stats</Text>
                                </View>
                            </View>
                            <View style={styles.set1}>
                                <Text style={{ fontSize: 18 }}>Personal Information</Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Card game.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Card Deck</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/profile_stamp.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>My Collection</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Collaboration.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Team</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.set2}>
                                <Text style={{ fontSize: 18 }}>App Settings </Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Headphones.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Help & Support</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Help.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>FAQs</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Cloud computing.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Privacy Policy</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Key.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Change Password</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/pstar.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Rate us</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/proc_setting.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Preferences</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Add friend.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18 }}>Invite a friend</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center', top: 30 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/copyright.png')} style={{ height: 12, width: 12 }} />
                                        <Text style={{ fontsize: 12, textDecorationLine: 'underline', color: '#A4AED3' }}>Terms and Conditions</Text>

                                    </View>

                                </TouchableOpacity>

                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.logout}>
                                <TouchableWithoutFeedback  onPress={handleLogout}><Text style={{ fontSize: 18, alignSelf: 'center', top: 10 }}>Log out</Text></TouchableWithoutFeedback>
                            </View>
                        </TouchableOpacity>

                    </ImageBackground>
                </View>


            </ScrollView>
            <Footer></Footer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',

    },
    logout: {
        alignSelf: 'center',
        backgroundColor: 'white',
        top: 120,
        height: 40,
        width: 140,
        borderRadius: 10,
        opacity: 0.7
    },
    set1: {
        top: 140,
        gap: 20
    },
    set2: {
        top: 170,
        gap: 20
    },
    score: {
        alignItems: 'center',
        top: 120,
        height: 500,
        width: 350,
        gap: 50,
        backgroundColor: 'rgba(76, 102, 248,0.5)',
        borderRadius: 20
    },
    block: {

        top: 100,
        height: 100,
        width: 100,
        backgroundColor: '#FFEEDD',

        borderRadius: 10
    },
    info: {
        fontSize: 24,
        textAlign: 'center',
        top: 60,

    },
    pfp: {
        top: 150,
        alignSelf: 'center',
        zIndex: 2
    },
    bg: {

        borderRadius: 15,
        height: 2000,

        width: '100%',
    },
    data: {
        backgroundColor: 'white',
        top: '4%',
        borderRadius: 70,
        height: 1555,
        width: '100%',
        zIndex: 1,
        padding: 20,

    },
});