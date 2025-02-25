import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity,SafeAreaView,Image, Platform, PixelRatio,ScrollView} from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Footer from '../components/Footer';
import Product from '../components/Product';

const ProductCard = ({name, description, price, image, onPress }) => {
    const navigation = useNavigation()
    return (
      <TouchableOpacity style={{
        backgroundColor: 'rgba(255, 238, 221, 0.5)',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom : '4%'
       }} onPress={() => navigation.navigate("Product")}>
        <Image source={image} style={{height : 130, width : 102, justifyContent:'center'}} resizeMode="contain" />
        <View style={{marginLeft: '10%', justifyContent : 'center'}}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color : '#1D3557', 
                marginBottom : 2
                }}>
                    {name}
                </Text>
            <Text style={{fontSize: 12, color:'#1D3557', marginBottom : 2}}>{description}</Text>
            <View style={{
                marginTop : '2%',
                flexDirection : 'row',
                alignItems : 'center'
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black', 
                    textAlign : 'left',
                    marginBottom : 2
                    }}>PRICE: {price}
                </Text>
                <Image source={require('../assets/coins.png')} style={{height : 22, width : 22, marginLeft : '5%'}}></Image>
            </View>
        </View>
      </TouchableOpacity>
    );
};

export default function Archives() {
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
            <Image source={require('../assets/notification.png')} styles={{marginRight : '3%'}}></Image>
            <Image source={require('../assets/coins.png')}></Image>
            <Image source={require('../assets/profile.png')}></Image>
        </View>
    </View>
    <Text style={styles.archives1}>ARCHIVES</Text>
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <ProductCard name={'NAME'} description={'DESCRIPTION -- --'} price={'15'} image={source=require('../assets/stamp.png')} />
        <ProductCard name={'NAME'} description={'DESCRIPTION -- --'} price={'15'} image={source=require('../assets/Civil-Services.png')} />
        <ProductCard name={'NAME'} description={'DESCRIPTION -- --'} price={'15'} image={source=require('../assets/stamp.png')} />
        <ProductCard name={'NAME'} description={'DESCRIPTION -- --'} price={'15'} image={source=require('../assets/stamp.png')} />
        <ProductCard name={'NAME'} description={'DESCRIPTION -- --'} price={'15'} image={source=require('../assets/stamp_2.jpg')} />
        <ProductCard name={'NAME'} description={'DESCRIPTION -- --'} price={'15'} image={source=require('../assets/stamp.png')} />
    </ScrollView>
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
    each : {
        width : '90%',
        height : '30%',
        backgroundColor : '#FFEEDD',
        borderRadius : 5
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
        marginBottom : '22%'
    }
    });