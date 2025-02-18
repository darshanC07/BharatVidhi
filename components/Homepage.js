import { StyleSheet, Text, SafeAreaView, View, Alert, Image, ScrollView, Button, Platform, StatusBar } from 'react-native';
import Footer from './Footer';

export default function Homepage() {
    let lineNumbers = 3;
    function handlePress() {
        lineNumbers = 6;
        console.log("clicked")
    }
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                paddingRight: 20,
                paddingLeft: 20
            }}>

                {/* <StatusBar/> */}

                <View style={{
                    // backgroundColor: "lightblue",
                    // marginTop: 40,
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 10,
                    // flex: 1,
                    // justifyContent: "space-around",
                    flexDirection: "row"
                }}>
                    <Text style={{
                        fontSize: 25,
                        flex: 2,
                        // width:50
                    }}>BharatVidhi</Text>

                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        alignSelf: "stretch"
                    }}>
                        <Image source={require('../assets/notification.png')} />
                        <Image source={require('../assets/coins.png')} />
                        <Image source={require('../assets/profile.png')} />
                    </View>
                </View>
                <View style={{
                    height: 120,
                    backgroundColor: 'grey',
                    borderTopLeftRadius:30,
                    borderBottomRightRadius:30,
                    borderBottomLeftRadius:50
                }}>
                    <Image source={require('../assets/Owl.png')} style={styles.owl}/>
                </View>

                <View>
                    <Text style={{
                        fontSize: 20
                    }}>Sections</Text>
                </View>
                <ScrollView style={{
                    height:520
                }} showsVerticalScrollIndicator={false}>
                    <View style={{
                        backgroundColor: 'lightblue',
                        height: 120,
                        marginBottom: 10
                    }}></View>
                    <View style={{
                        backgroundColor: 'lightblue',
                        height: 120,
                        marginBottom: 10
                    }}></View>
                    <View style={{
                        backgroundColor: 'lightblue',
                        height: 120,
                        marginBottom: 10
                    }}></View>
                    <View style={{
                        backgroundColor: 'lightblue',
                        height: 120,
                        marginBottom: 10
                    }}></View>
                    <View style={{
                        backgroundColor: 'lightblue',
                        height: 120,
                        marginBottom: 10
                    }}></View>
                    <View style={{
                        backgroundColor: 'lightblue',
                        height: 120,
                        marginBottom: 10
                    }}></View>
                    <View style={{
                        backgroundColor: 'lightblue',
                        height: 120,
                        marginBottom: 10
                    }}></View>

                </ScrollView>

            </View>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    owl:{
        // position:'relative',
        top:40,
        height:80,
        width:80,
        
    }
});