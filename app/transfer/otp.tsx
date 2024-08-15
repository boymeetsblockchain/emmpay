import BackButton from '@/components/backbutton'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { OTPInputComp } from '@/components/Otp'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { router } from 'expo-router'
export default function OtpVerification() {
  return (
    <SafeAreaView style={tw `px-5 flex-1 relative`}>
      
    <View style={tw `flex-row justify-between`}>
        <BackButton/>
      <Text style={tw`text-2xl font-bold text-center  mb-4`}>Otp Verification</Text>
      <View/>
      <View/>
      </View>
    <View style={tw `flex-col items-center mt-20 gap-y-4 justify-center`}>
     <Text style={tw `text-center text-lg px-8  font-bold`}>Please enter the OTP sent to example@gmail.com</Text>
     <View>
        <OTPInputComp digits={4} onChangeText={()=>{}}/>
     </View>
     <Text style={tw `text-center text-2xl text-[#3E9850] px-8  mt-15 font-bold`}>Resend Code</Text>
    </View>

    <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4  absolute bottom-2  rounded-md left-5  w-full` }
        >
       <Pressable onPress={()=>router.push('/transfer/success')}>
       <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
       </Pressable>
        </TouchableOpacity>
    </SafeAreaView>
  )
}