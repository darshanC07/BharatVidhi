import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity,SafeAreaView,Image, Platform, PixelRatio,ScrollView} from 'react-native';
import Footer from './Footer';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';

const ProductDisplay = ({name, description, price, image, onPress, accquired, total }) => {
    return (
      <View style={{
        backgroundColor: 'rgba(255, 238, 221, 0.4)',
        borderRadius: 10,
        padding: 10,
        height: '73%',
        width : '90%',
        marginBottom : '4%',
        marginTop :'2%'
       }} onPress={() => navigation.navigate("Product")}>
        <View style={{padding : 10}}>
            <View style = {{
                    marginTop : '1%',
                    justifyContent : 'space-between',
                    alignItems : 'center',
                }}>
                <View style={{flexDirection : 'row', alignItems : 'center',  marginLeft : '2%'}}>
                    <TouchableOpacity>
                        <Image source={require('./assets/back.png')}/>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color : '#1D3557',
                        marginLeft : '5%'
                        }}>
                        {name}
                    </Text>
                    <Text style={{fontSize : 20, marginLeft : '50%'}}> {accquired} / {total} </Text>
                </View>
            </View>
            <Image source={image} style={{height : '60%', width : '100%', justifyContent:'center', marginTop : '2%'}} resizeMode="contain" />
            <View style={{alignItems : 'center', flexDirection : 'row', flex : 1, justifyContent : 'center'}}>
                <View style={{backgroundColor : '#ADADAD', height : 10, width : 10, borderRadius : 5, marginHorizontal : '5%'}}></View>
                <View style={{backgroundColor : '#D9D9D9', height : 10, width : 10, borderRadius : 5, marginHorizontal : '5%'}}></View>
            </View>
            <View style={{ alignItems: 'center' }}>
        </View>
            <Text style={{fontSize: 18, color:'#1D3557', marginTop : '4%'}}>{description}</Text>
            <View style={{
                marginTop : '5%',
                flexDirection : 'row',
                alignItems : 'center'
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black', 
                    textAlign : 'left',
                    }}>PRICE: {price}
                </Text>
                <Image source={require('./assets/coins.png')} style={{height : 22, width : 22, marginLeft : '2%'}}></Image>
            </View>
            <View style={{
                flexDirection : 'row',
                marginTop : '8%',
                justifyContent : 'center'
            }}>
                <TouchableOpacity style={{ height : 60, width : '50%', backgroundColor: 'rgba(255, 238, 221, 0.8)', justifyContent : 'center', borderRadius: 10, borderColor : '#FFDCB9', borderBottomWidth: 3}}>
                    <Text style={{fontSize : 18, textAlign : 'center'}}>BUY NOW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height : 60, width : '50%', backgroundColor: 'rgba(255, 238, 221, 0.8)', marginLeft : '4%', justifyContent :'center', borderRadius: 10, borderColor : '#FFDCB9', borderBottomWidth: 3}}>
                    <Text style={{fontSize : 18, textAlign : 'center'}}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
};

export default function Product() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
        height: 50,
        flexDirection: "row",
        verticalAlign:'top',
        marginTop : '13%',
        paddingRight: 20,
        paddingLeft: 20
    }}>
        <Text style={{
            fontSize: 25,
            color : '#232ED1',
            fontWeight : 'bold',
            textAlign : 'left',
        }}>BHARAT VIDHI</Text>

        <View style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: "row",
            alignSelf: "stretch",
            marginLeft : '16%'
        }}>
            <Image source={require('./assets/notification.png')} styles={{marginRight : '3%'}}></Image>
            <Image source={require('./assets/coins.png')}></Image>
            <Image source={require('./assets/profile.png')}></Image>
        </View>
    </View>
    <Text style={styles.archives1}>ARCHIVES</Text>
        <ProductDisplay 
            bgColor={'#FFEEDD'} 
            name={'NAME'} 
            description={'DESCRIPTION -- --'} 
            price={'15'} 
            image={source=require('./assets/stamp.png')} 
            total={5}
            accquired={0}/>
    <Footer></Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    archives1 : {
        fontSize: 22,
        color: "#080606",
        textAlign: "center",
        marginTop:'2%'
    },
    container: {
        backgroundColor: 'white',
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
    scroll:{
        width : 340,
        borderRadius : 10,
        marginTop : '5%',
        marginBottom : '10%'
    }
    });
