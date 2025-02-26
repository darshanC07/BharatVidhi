import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableWithoutFeedback,SafeAreaView,Image,TouchableOpacity, Platform, PixelRatio,ScrollView, ImageBackground} from 'react-native';
import Footer from './Footer';
const ProgressBar = ({ progress }) => {
    return (
    <View style={{
         
        alignItems: 'center'
        }}>
        <View style={{
            width: '90%',
            height: 5,
            backgroundColor: '#C9C0FF',
            borderRadius: 5,
            overflow: 'hidden',
            marginTop : '5%',
            marginBottom : '5%'
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
const Card = ({ title, description }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    marginTop : '6%',
                    height : '100%',
                    width : '40%',
                    opacity : 0
                }}>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    marginTop : '6%',
                    marginLeft : '75%',
                    height : '100%',
                    width : '40%',
                    opacity : 0
                }}>
            </TouchableOpacity>
        </View>

        
    );
};


export default function App() {
  return (
    <View style={styles.container}>
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
    <ProgressBar progress={25}></ProgressBar>
    <View style={styles.base}> 
    <Card title={"Artical 39(f) Health and Nutrition "} description={"Article 39(f) is part of the Directive Principles of State Policy (DPSP) in the Indian Constitution, which directs the state to ensure the welfare of children. It mandates that the state must take steps to ensure that children are provided with opportunities and facilities to develop in a healthy manner and conditions of freedom and dignity"}>

    </Card>
    </View>
   
    <Footer></Footer>
</View>
  );
}

const styles = StyleSheet.create({
    base:{
        alignItems:'center', 
        height:'100%',
    },
    container: {
        backgroundColor: 'white',
        width:'100%',
        height:'100%',
        flexDirection: 'column',
        flex:1
      },
      nav:{
        width:40,
        height:30,
        backgroundColor:'blue',

      },
    card:{
       
        height:'65%',
        width:'85%',
        borderRadius: 15,
        backgroundColor:'pink',
        marginTop:'6%',
        padding:20 
    },
    title:{
        color:'white',
        fontSize:24,
        fontWeight : 'bold',
         textAlign : 'center'
    },
    description:{
        color:'white',
        fontSize : 18,
        opacity : 0.7,
        textAlign:'justify'
    },
});