import BackButton from '@/components/backbutton'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { View, Text, SafeAreaView, Pressable, Switch } from 'react-native'
import tw from 'twrnc'
import { useState } from 'react'

export default function Settings() {
  // State for the switches
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false)
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true)
  const [isAppUpdateEnabled, setAppUpdateEnabled] = useState(false)

  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10 relative bg-white`}>
      <View style={tw`flex-row items-center justify-between mb-8`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center flex-1`}>Settings</Text>
        <View style={tw`w-10`} /> 
      </View>

      {/* Settings List */}
      <View style={tw`flex-col gap-y-5`}>
        {/* Change Password */}
        <Pressable
          onPress={() => router.push('/settings/password')}
          style={({ pressed }) => [
            tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`,
            pressed && tw`bg-gray-200`
          ]}
        >
          <Text style={tw`text-xl font-bold`}>Change Password</Text>
          <Entypo name="chevron-right" size={20} color="black" />
        </Pressable>

        {/* Change Pin */}
        <Pressable
          onPress={() => router.push('/settings/pin')}
          style={({ pressed }) => [
            tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`,
            pressed && tw`bg-gray-200`
          ]}
        >
          <Text style={tw`text-xl font-bold`}>Change Pin</Text>
          <Entypo name="chevron-right" size={20} color="black" />
        </Pressable>

        {/* About Me */}
        <Pressable
          style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}
        >
          <Text style={tw`text-xl font-bold`}>About Me</Text>
        </Pressable>

        {/* Dark Mode */}
        <View style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}>
          <Text style={tw`text-xl font-bold`}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={setDarkModeEnabled}
          />
        </View>

        {/* General Notifications */}
        <View style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}>
          <Text style={tw`text-xl font-bold`}>General Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        {/* App Update */}
        <View style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}>
          <Text style={tw`text-xl font-bold`}>App Update</Text>
          <Switch
            value={isAppUpdateEnabled}
            onValueChange={setAppUpdateEnabled}
          />
        </View>

        {/* Delete Account */}
        <Pressable
          onPress={() => console.log('Delete Account Pressed')}
          style={({ pressed }) => [
            tw`p-4 mt-6`,
            pressed && tw`opacity-75`
          ]}
        >
          <Text style={tw`text-red-500 font-bold text-2xl`}>
            Delete Account
          </Text>
        </Pressable>

     
        <Pressable
          onPress={() => console.log('Log Out Pressed')}
          style={({ pressed }) => [
            tw`p-4`,
            pressed && tw`opacity-75`
          ]}
        >
          <Text style={tw`text-green-500 font-bold text-2xl`}>
            Log Out
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
