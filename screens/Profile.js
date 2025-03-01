
import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, Button, TouchableWithoutFeedback } from 'react-native';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { Itim_400Regular } from '@expo-google-fonts/itim';
import { Iceland_400Regular } from '@expo-google-fonts/iceland';
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
    const [user, setUser] = useState(null)
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

    const [fontsLoaded] = useFonts({
        PatrickHandSC_400Regular,
        Itim_400Regular,
        Iceland_400Regular
    });

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
            <ScrollView style={{ borderRadius: 30 }}>
                <View style={styles.bg}>
                    <ImageBackground source={require('../assets/profile_bg.png')} style={styles.bg}>
                        <Image source={require('../assets/Profile_page.png')} style={styles.pfp}></Image>
                        <View style={styles.data}>
                            <Details name={user ? user.name : "demo"} age={'17'} email={user ? user.name : "abc@gmail.com"}></Details>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <View style={styles.block}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center', top: 20, fontFamily: 'Itim_400Regular' }}>{Streaks}</Text>
                                    <Image source={require('../assets/Fire.png')} style={{ alignSelf: 'center', top: '30%' }} />
                                </View>
                                <View style={styles.block}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center', top: 20, fontFamily: 'Itim_400Regular' }}>{level}</Text>
                                    <Image source={require('../assets/Scoring.png')} style={{ alignSelf: 'center', top: '30%' }} />
                                </View>
                                <View style={styles.block}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center', top: 20, fontFamily: 'Itim_400Regular' }}>{badge}</Text>
                                    <Image source={require('../assets/Premium Badge.png')} style={{ alignSelf: 'center', top: '30%' }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 85, top: 105, paddingLeft: 28 }}>
                                <Text style={{ fontSize: 12, color: '#A4AED3', fontFamily: 'Itim_400Regular' }}>Streaks</Text>
                                <Text style={{ fontSize: 12, color: '#A4AED3', fontFamily: 'Itim_400Regular' }}>Level</Text>
                                <Text style={{ fontSize: 12, color: '#A4AED3', fontFamily: 'Itim_400Regular' }}>Badges</Text>
                            </View>
                            <View style={styles.score}>
                                <Text style={{ fontSize: 24, left: 20, fontFamily: 'Iceland_400Regular', marginTop: 10,color:'white' }}>Statistics</Text>
                                <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 30 }} >
                                    <Image source={require('../assets/Pie chart.png')} style={{ height: 111, width: 111 }} />
                                    <View style={{ height: '70%', width: '50%', backgroundColor: '#B4BEFB', borderRadius: 15, paddingLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', alignSelf: 'center', lineHeight: 25,fontSize:15 }}>User stats</Text>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', lineHeight: 15,fontSize:15 }}>Time Spent :0</Text>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', lineHeight: 15 ,fontSize:15}}>Average Daily Usage:0 </Text>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', lineHeight: 15 ,fontSize:15}}>Most Viewed Conetent:0</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', gap: 10 }}>
                                    <Text style={{ fontFamily: 'Iceland_400Regular', alignSelf: 'center', backgroundColor: '#B4BEFB', borderRadius: 6,padding:10,fontSize:15 }}>Leader board stats</Text>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 10, alignSelf: 'center' }}>
                                        <View style={{ height: 50, width: 50, backgroundColor: '#f7d108', borderRadius: 5 }}>
                                            <Text style={{ fontFamily: 'Iceland_400Regular', fontSize: 12, top: 10, alignSelf: 'center' }}>0</Text>
                                            <Text style={{ fontFamily: 'Iceland_400Regular', fontSize: 12, top: 20, alignSelf: 'center' }}>Zonal</Text>
                                        </View>
                                        <View style={{ height: 50, width: 50, backgroundColor: '#f7d108', borderRadius: 5 }}>
                                            <Text style={{ fontFamily: 'Iceland_400Regular', fontSize: 12, top: 10, alignSelf: 'center' }}>0</Text>
                                            <Text style={{ fontFamily: 'Iceland_400Regular', fontSize: 12, top: 20, alignSelf: 'center' }}>State</Text>
                                        </View>
                                        <View style={{ height: 50, width: 50, backgroundColor: '#f7d108', borderRadius: 5 }}>
                                            <Text style={{ fontFamily: 'Iceland_400Regular', fontSize: 12, top: 10, alignSelf: 'center' }}>0</Text>
                                            <Text style={{ fontFamily: 'Iceland_400Regular', fontSize: 12, top: 20, alignSelf: 'center' }}>National</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 30 }}>
                                    <View style={{ height: '70%', width: '50%', backgroundColor: '#B4BEFB', borderRadius: 15, paddingLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', alignSelf: 'center', lineHeight: 25,fontSize:15 }}>Civic mastery stats</Text>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', lineHeight: 15 ,fontSize:15}}>Total Games played :0</Text>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', lineHeight: 15 ,fontSize:15}}>Games won:0 </Text>
                                        <Text style={{ fontFamily: 'Iceland_400Regular', lineHeight: 15 ,fontSize:15}}>Points earned:0</Text>
                                    </View>

                                    <Image source={require('../assets/Analysis.png')} style={{ height: 111, width: 111 }} />
                                </View>
                            </View>
                            <View style={styles.set1}>
                                <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Personal Information</Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Card game.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Card Deck</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/profile_stamp.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>My Collection</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Collaboration.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Team</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.set2}>
                                <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>App Settings </Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Headphones.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Help & Support</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Help.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>FAQs</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Cloud computing.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Privacy Policy</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Key.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Change Password</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/pstar.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Rate us</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/proc_setting.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Preferences</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 20 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/Add friend.png')} style={{ height: 30, width: 30 }} />
                                        <Text style={{ fontSize: 18, fontFamily: 'Itim_400Regular' }}>Invite a friend</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center', top: 30 }} onPress={() => navigation.navigate('Learning')}>
                                        <Image source={require('../assets/copyright.png')} style={{ height: 12, width: 12 }} />
                                        <Text style={{ fontsize: 12, textDecorationLine: 'underline', color: '#A4AED3', fontFamily: 'Itim_400Regular' }}>Terms and Conditions</Text>

                                    </View>

                                </TouchableOpacity>

                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.logout}>
                                 <TouchableWithoutFeedback  onPress={handleLogout}><Text style={{ fontSize: 18, alignSelf: 'center', top: 10,fontFamily: 'Itim_400Regular' }}>Log out</Text></TouchableWithoutFeedback>
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

        top: 120,
        height: 500,
        width: 350,
        gap: 50,
        backgroundColor: '#4C66F8',
        borderRadius: 20,
        fontFamily: 'Iceland_400Regular'
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
        fontFamily: 'Itim_400Regular'
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