import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity} from 'react-native';
import Footer from './Footer';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { Itim_400Regular } from "@expo-google-fonts/itim";

const [fontsLoaded] = useFonts({
    PatrickHandSC_400Regular,
    Itim_400Regular,
});

const propertyCards = ['#298EFF', '#FF8B73', '#32DAF9'];
const rightsCards = ['#A596FF', '#B4FF88', '#ABE3FF'];
const commercialCards = ['#44914C', '#EFB38E',  '#FFD34B'];
const fundamentalsCards = ['#E6EFFD', '#F76565', '#AEE16B']; //to be finalized

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

const LearningCard = ({ image, description, title, bgcolor}) => {
    return (
    <View style={{ alignItems : 'center', marginTop : '6%'}}>
        <View style={{
            backgroundColor : bgcolor,
            width : '83%',
            height : '85%',
            borderRadius : 15,
            padding : 20,
            shadowColor: '#000', 
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 6,
            elevation: 8,
            position : 'relative',
        }}>
            <Text style={{
                fontSize : 24,
                fontWeight : 'bold',
                textAlign : 'center',
                fontFamily : 'Itim_400Regular'
            }}>{title}</Text>
            <Image source={image} style={{
                alignSelf : 'center',
                height : 200,
                width : 200,
                resizeMode : 'contain',
                marginBottom : '5%',
                marginTop : '5%'
            }}/>
            <Text style={{
                fontSize : 18,
                opacity : 0.7,
                textAlign : 'justify',
                fontFamily : 'Itim_400Regular'
            }}>{description}</Text>
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
    </View>
    );
};

export default function Learning() {
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
                        color : '#232ED1',
                        fontWeight : 'bold'
                    }}>BHARAT VIDHI</Text>

                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        alignSelf: "stretch",
                        marginRight : '2%'
                    }}>
                        <Image source={require('./assets/notification.png')} />
                        <Image source={require('./assets/coins.png')} />
                        <Image source={require('./assets/profile.png')} />
                    </View>
                </View>
            </View>
            <ProgressBar progress={25}></ProgressBar>
            <Text style={{
                fontSize : 18,
                textAlign : 'center',
                fontFamily : 'PatrickHandSC_400Regular'
            }}>Heading</Text>
            <LearningCard 
                bgcolor={'#ABE3FF'} 
                title={'Article 39(f) Health and Nutrition'} 
                image={source=require('./assets/article.png')} 
                description={'Article 39(f) of the Indian Constitution, under the Directive Principles of State Policy, emphasizes that children should be given opportunities and facilities to develop in a healthy manner and that childhood and youth should be protected against exploitation and against moral and material abandonment.'}/>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});