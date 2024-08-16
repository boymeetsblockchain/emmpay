import { View, Text, SafeAreaView,Image,Pressable } from 'react-native'
import { router } from 'expo-router'
import tw from 'twrnc'
import BackButton from '@/components/backbutton'

export default function Send() {
  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10`}>
      <View style={tw`flex-row items-center mb-8`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center mr-20 flex-1`}>Send</Text>
      </View>
      <View style={tw`items-center mb-8`}>
        <Text style={tw`text-sm bg-[#C9D0FF] py-2 px-3 rounded-md text-center`}>
          Available Balance: $1,565,520.57
        </Text>
      </View>
      {/* images */}
      <View>
        <Pressable onPress={()=>router.push('/send/emmpay/')}>
        <Image
              source={require('../../assets/white.png')} 
              style={tw`w-full rounded-md`} 
            />
        </Pressable>
        <Pressable onPress={()=>router.push('/send/bank/')}>
        <Image
              source={require('../../assets/green.png')} 
              style={tw`w-full rounded-md`} 
            />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
