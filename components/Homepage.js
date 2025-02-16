import { StyleSheet, Text, SafeAreaView, View, Alert, Image, ScrollView, Button, Platform, StatusBar } from 'react-native';

export default function Homepage() {
    let lineNumbers = 3;
    function handlePress() {
        lineNumbers = 6;
        console.log("clicked")
    }
    return (
        <View style={{
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingRight:20,
            paddingLeft:20
        }}>

            {/* <StatusBar/> */}

                <View style={{
                    // backgroundColor: "lightblue",
                    // marginTop: 40,
                    height:60,
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
                    height:100,
                    backgroundColor:'grey'
                }}></View>
                
                <View>
                    <Text style={{
                        fontSize:20
                    }}>Sections</Text>
                    <ScrollView >
                        <View style={{
                            backgroundColor:'lightblue',
                            height:120,
                            marginBottom:10
                        }}></View>
                        <View style={{
                            backgroundColor:'lightblue',
                            height:120,
                            marginBottom:10
                        }}></View>
                        <View style={{
                            backgroundColor:'lightblue',
                            height:120,
                            marginBottom:10
                        }}></View>
                        <View style={{
                            backgroundColor:'lightblue',
                            height:120,
                            marginBottom:10
                        }}></View>
                        {/* <View style={{
                            backgroundColor:'lightblue',
                            height:120,
                            marginBottom:10
                        }}></View>
                        <View style={{
                            backgroundColor:'lightblue',
                            height:120,
                            marginBottom:10
                        }}></View>
                        <View style={{
                            backgroundColor:'lightblue',
                            height:120,
                            marginBottom:10
                        }}></View> */}
                        
                    </ScrollView>
                </View>
                {/* <View>
                    <Text>Hello</Text>
                </View> */}
                {/* <View style={{
                    flex:1,
                    justifyContent:'flex-end'
                }}>
                    <Text>Footer</Text>
                </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        // alignItems: "center",
        // justifyContent: "center"
    },
});