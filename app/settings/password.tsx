import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import BackButton from '@/components/backbutton'
import tw from 'twrnc'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const router = useRouter()

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert("Error", "New Passwords do not match.")
    } else {
      // Handle Password change logic here
      Alert.alert("Success", "Your Password has been successfully changed.")
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
          <Text style={tw`text-2xl font-bold text-center ml-8 mb-4`}>Change Password</Text>
          </View>

         {/* Old Password */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Enter Old Password</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Enter Old Password"
            secureTextEntry
            keyboardType="numeric"
            value={oldPassword}
            onChangeText={setOldPassword}
          />
        </View>

        {/* New Password */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Enter New Password</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Enter New Password"
            secureTextEntry
            keyboardType="numeric"
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        {/* Confirm New Password */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-lg font-semibold`}>Confirm New Password</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-2 rounded mb-4`}
            placeholder="Confirm New Password"
            secureTextEntry
            keyboardType="numeric"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={tw`text-[#3E9850] text-left text-lg text-right`}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Change Password Button */}
        <View style={tw`mt-4 absolute bottom-4 w-full`}>
          <TouchableOpacity
            style={tw`bg-[#3E9850] py-2`}
            onPress={handleChangePassword}
          >
            <Text style={tw`text-white text-center text-lg font-semibold`}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
