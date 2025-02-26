import { StyleSheet, Text, View, Image, Platform, StatusBar} from 'react-native';
import Footer from './Footer';

const propertyCards = ['#298EFF', '#32DAF9', '#FF8B73'];
const rightsCards = ['#ABE3FF', '#A596FF', '#B4FF88'];
const commercialCards = ['#EFB38E', '#44914C', '#FFD34B'];
const fundamentalsCards = ['#EFB38E', '#44914C', '#FFD34B'];

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
            elevation: 8 
        }}>
            <Text style={{
                fontSize : 24,
                fontWeight : 'bold',
                textAlign : 'center'
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
                textAlign : 'justify'
            }}>{description}</Text>
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
            <LearningCard 
                bgcolor={'#ABE3FF'} 
                title={'Article 39(f) Health and Nutrition'} 
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