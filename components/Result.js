import { View, Text } from 'react-native';
import { Itim_400Regular, useFonts } from "@expo-google-fonts/itim";

const Result = ({isCorrect, isWrong}) => {
  let data = "";
  const [fontsLoaded] = useFonts({
      Itim_400Regular,
  });
  if (isCorrect == true) {
    data = 'HURRAY!! \n You got it right!';
  }
  if (isWrong == true) {
    data = 'OOPS! \n Wrong answer!'
  }
  return (
    <View style={{
      backgroundColor : 'white',
      alignItems : 'center',
      justifyContent : 'center',
      width : '100%',
      height : '100%',
      borderRadius:10,
      borderWidth:1
    }}>
      <Text style={{
        fontFamily : 'Itim_400Regular',
        fontSize : 24,
        color:'black',
        textAlign : 'center'
      }}>{data}</Text>
    </View>
  );
};


export default Result;
