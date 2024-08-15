import { Link } from 'expo-router'
import { View, Text, Image, Pressable } from 'react-native'
import tw from 'twrnc'
const Onboarding = () => {
  return (
 <View style={tw `bg-[#3E9850] flex-1 pt-40 relative  flex items-center justify-center  text-white`}>
   <View style={tw`px-6`}>
   <Text style={tw `text-4xl font-bold pt-20  leading-tight text-white `}>
   Global Money Movement, Simplified: Send, Receive, Pay, Repeat.
   </Text>
   <Text style={tw`text-lg my-4 text-white`}>
   Make quick transactions with Emmpay
   </Text>
   </View>
   <Image  source={require('../assets/hero.png')} 
        style={tw`w-full h-full `} />

   <View style={tw`absolute bottom-5 z-10  flex-col justify-center  items-center`}>
      <Pressable  style={tw`bg-[#3E9850] w-[300px] flex items-center justify-center py-4 px-2 rounded-lg`}>
        <Link href={'/auth/register'} >
       <Text style={tw`text-white text-xl font-bold text-center`}>
       Get Started
       </Text>
        </Link>
      </Pressable>
        <Pressable>
        <Link href={"/auth/login"}>
        <Text style={tw`text-white text-2xl`}>Already Have an Account ? <Text style={tw`text-[#3E9850] underline`}>Login</Text></Text>
      </Link>
        </Pressable>
   </View>
 </View>
  )
}
export default Onboarding