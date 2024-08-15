import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import tw from 'twrnc'

export default function Login() {
  const [phoneOrEmail, setPhoneOrEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    router.push('/auth/login/create')
    
  }

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    Alert.alert("Forgot Password", "Reset password instructions will be sent.")
  }

  return (
    <SafeAreaView style={tw`flex-1 p-4`}>
      <View style={tw`flex-1 mt-20 relative`}>
        <Text style={tw`text-3xl font-bold text-center mb-4`}>Log In</Text>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Enter Phone No / Email</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Enter Phone No/email"
            value={phoneOrEmail}
            onChangeText={setPhoneOrEmail}
          />
        </View>

        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Enter Password</Text> 
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          onPress={handleForgotPassword}
        >
          <Text style={tw`text-[#3E9850] text-left text-lg`}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={tw`mt-4 absolute bottom-4 w-full`}>
          <TouchableOpacity
            style={tw`bg-[#3E9850]  py-2`}
            onPress={handleLogin}
          >
            <Text style={tw`text-white text-center text-lg font-semibold`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
