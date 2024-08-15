import tw from 'twrnc'
import { Link } from 'expo-router'
import { View, Text, Image, Pressable } from 'react-native'

export default function index() {

  return (
    <View style={tw `flex-1 items-center justify-center`}>
        <Image  source={require('../assets/logo.png')} 
        style={{ width: 200, height: 200 }} />
       <Pressable>
        <Link href={'/onboarding'} style={tw`bg-[#3E9850] text-white px-3 py-4 rounded-md`}>
          Click to Proceed
        </Link>
       </Pressable>
    </View>
  )
}