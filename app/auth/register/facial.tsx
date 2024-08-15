import { router } from 'expo-router'
import { View, Text ,Image, TouchableOpacity} from 'react-native'

import tw from 'twrnc'
export default function Facial() {
    const handleNext=()=>{
        router.push('/auth/register/verify')
    }
  return (
    <View style={tw `flex-1 mx-10 items-center mt-20 relative`} >
      <Text style={tw`text-3xl font-bold text-center mb-4`}>Facial Recognition</Text>
       <Text style={tw`text-center  text-lg`}>Facial recognition is a secure and convenient way to verify your identity and protect your account.</Text>
        <View style={tw `flex items-center my-10 `}>
        <Image  source={require('../../../assets/face.png')} 
        style={tw`w-[400px] h-[400px] `} />
        </View>
        <TouchableOpacity
          style={tw`bg-[#3E9850] absolute bottom-2 w-full py-2`}
          onPress={handleNext}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}