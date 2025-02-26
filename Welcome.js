import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableWithoutFeedback,SafeAreaView,Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>WELCOME</Text>
     
     <Image source={require('./assets/Group 201.png')}
     style={styles.top_image}/>
     <Image source={require('./assets/Group 201.png')}
     style={styles.bottom_image}/>
     <Text style={styles.content}>"Welcome to your journey
       of understanding the Indian Constitution!
        As you progress through the game,
         you will unlock levels that deepen
          your knowledge of rights, duties, and 
          the amendments that shape our nation."
</Text>
<TouchableWithoutFeedback>
<Text style={styles.proceed} onPress={() => navigation.navigate('')}>
  Click to Proceed!
</Text>
</TouchableWithoutFeedback>

     <Image source={require('./assets/scroll.png')}
     style={styles.scroll_image}
     />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'justify',
  },
  heading:{
   fontFamily:'monospace',
   fontSize:50,
   position:'absolute',
   top:'8%'
  },
  content:{
    fontFamily:'monospace',
    fontSize:20,
    lineHeight:30,
    width:'75%',
    textAlign:'center',
  },
  proceed:{
    fontSize:15,
    top:'10%'
  },
  scroll_image:{
    width: '90%' ,
    height:'80%' ,
    top:'17%',
    position: 'absolute',  },
  top_image:{
      position: 'absolute',  
    top:'0%',

    },
    bottom_image:{
      position: 'absolute',  
    bottom:'0%',
    },
});
