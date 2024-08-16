import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import BackButton from '@/components/backbutton'
import tw from 'twrnc'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


export default function ChangePin() {
  const [oldPin, setOldPin] = useState("")
  const [newPin, setNewPin] = useState("")
  const [confirmNewPin, setConfirmNewPin] = useState("")
  const router = useRouter()

  const handleChangePin = () => {
    if (newPin !== confirmNewPin) {
      Alert.alert("Error", "New PINs do not match.")
    } else {
      // Handle pin change logic here
      Alert.alert("Success", "Your PIN has been successfully changed.")
      router.push('/dashboard') // Navigate to another screen upon success
    }
  }

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "Reset password instructions will be sent.")
  }

  return (
    <SafeAreaView style={tw`flex-1 p-4`}>
      <View style={tw`flex-1 mt-20 relative`}>
      <View style={tw `flex-row gap-x-10`}>
            <BackButton/>
          <Text style={tw`text-2xl font-bold text-center ml-8 mb-4`}>Change Pin</Text>
          </View>

         {/* Old PIN */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Enter Old PIN</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Enter Old PIN"
            secureTextEntry
            keyboardType="numeric"
            value={oldPin}
            onChangeText={setOldPin}
          />
        </View>

        {/* New PIN */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Enter New PIN</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Enter New PIN"
            secureTextEntry
            keyboardType="numeric"
            value={newPin}
            onChangeText={setNewPin}
          />
        </View>

        {/* Confirm New PIN */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Confirm New PIN</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Confirm New PIN"
            secureTextEntry
            keyboardType="numeric"
            value={confirmNewPin}
            onChangeText={setConfirmNewPin}
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={tw`text-[#3E9850] text-left text-lg text-right`}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Change PIN Button */}
        <View style={tw`mt-4 absolute bottom-4 w-full`}>
          <TouchableOpacity
            style={tw`bg-[#3E9850] py-2`}
            onPress={handleChangePin}
          >
            <Text style={tw`text-white text-center text-lg font-semibold`}>Change PIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
