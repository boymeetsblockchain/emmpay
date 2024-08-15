import { OTPInputComp } from '@/components/Otp'
import { router } from 'expo-router'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import tw from 'twrnc'

export default function Verification() {
  const [otp, setOtp] = useState("")

  const handleResendCode = () => {
    // Logic to resend the OTP
    Alert.alert("Resend Code", "A new OTP has been sent to your email.")
  }

  const handleVerifyAccount = () => {
  router.push('/auth/register/facial')
  }

  return (
    <SafeAreaView style={tw`flex-1 px-4`}>
      <View style={tw`flex-1 justify-center relative`}>
        <Text style={tw`text-2xl font-bold text-center mb-4`}>Verify Your Email</Text>
        <Text style={tw`text-lg text-center mb-4`}>
          Please enter the OTP sent to <Text style={tw`font-semibold`}>example@gmail.com</Text>
        </Text>
            <OTPInputComp digits={4} onChangeText={setOtp}/>
        <TouchableOpacity
          style={tw` py-2`}
          onPress={handleResendCode}
        >
          <Text style={tw`text-[#3E9850] font-bold text-center text-lg font-semibold`}>Resend Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4 absolute bottom-4 w-full` }
          onPress={handleVerifyAccount}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>Verify Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
