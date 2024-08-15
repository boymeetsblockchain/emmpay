import BackButton from '@/components/backbutton'
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OTPInputComp } from '@/components/Otp'
import tw from 'twrnc'
import { useState } from 'react'
import { router } from 'expo-router'
export default function Confirmation() {
  const[open,setOpen]= useState<boolean>(false)
  return (
    <SafeAreaView style={tw `px-5`}>
      
        <View style={tw `flex-row gap-x-10`}>
            <BackButton/>
          <Text style={tw`text-2xl font-bold text-center ml-8 mb-4`}>Send</Text>
          </View>

          {/* {
            open && (
              <OTPInputComp digits={4} onChangeText={()=>{}}/>
            )
          } */}
          <View style={tw `items-center mt-4 justify-center`}>
          <Image
              source={require('../../assets/confirm.png')} 
              style={tw`w-60 rounded-md`} 
            />

          </View>
       
          <TouchableOpacity  style={tw`bg-[#3E9850]  py-2 mb-4  px-3 rounded-md my-10 w-full` }>
        <Pressable onPress={()=>router.push('/transfer/otp')}>
        <Text style={tw `text-center  text-2xl font-bold text-white`}>  Send</Text>
        </Pressable>
          </TouchableOpacity>
       
    </SafeAreaView>
  )
}