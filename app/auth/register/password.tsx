import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import tw from 'twrnc'

export default function PassWord() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleNext = () => {
   router.push('/auth/register/verification')
  }

  return (
    <View style={tw`flex-1 p-4 flex-col  gap-y-3 mt-20`}>
      <Text style={tw`text-3xl font-extrabold text-center mb-4`}>Create Password</Text>
      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Password</Text>
        <TextInput
          style={tw`border border-[#0000004D] px-3 py-2 rounded`}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Confirm Password</Text>
        <TextInput
          style={tw`border border-[#0000004D] px-3 py-2 rounded`}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View style={tw`flex-row flex-wrap`}>
        <View style={tw`w-1/2 p-1`}>
          <Text style={tw`border rounded-full text-center py-2 px-3`}>8 Characters</Text>
          <Text style={tw`border rounded-full text-center py-2 px-3 mt-2`}>An Uppercase Letter</Text>
        </View>
        <View style={tw`w-1/2 p-1`}>
          <Text style={tw`border rounded-full text-center py-2 px-3`}>A Lowercase Letter</Text>
          <Text style={tw`border rounded-full text-center py-2 px-3 mt-2`}>A Special Character</Text>
        </View>
        <View style={tw`w-1/2 p-1`}>
          <Text style={tw`border rounded-full text-center py-2 px-3`}>A Number</Text>
        </View>
      </View>
      <View style={tw`mt-6`}>
        <Text style={tw`text-sm text-center text-gray-500 mb-2`}>
          By continuing, you agree to our{' '}
          <Text style={tw`text-blue-500`}>Terms of Service</Text> and{' '}
          <Text style={tw`text-blue-500`}>Privacy Policy</Text>.
        </Text>
        <TouchableOpacity
          style={tw`bg-[#3E9850] py-2`}
          onPress={handleNext}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
