import { View, Text ,SafeAreaView,Image, TouchableOpacity, Pressable} from 'react-native'
import tw from 'twrnc'
import BackButton from '@/components/backbutton'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
export default function Emmpay() {
  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10 relative`}>
    <View style={tw`flex-row items-center mb-8`}>
      <BackButton />
      <Text style={tw`text-2xl font-bold text-center mr-20 flex-1`}>Send</Text>
    </View>
    <View style={tw`items-center mb-8`}>
      <Text style={tw`text-sm bg-[#C9D0FF] py-2 px-3 rounded-md text-center`}>
        Available Balance: $1,565,520.57
      </Text>
    </View>
    <View style={tw `items-center justify-center`}>
    <Image  source={require('../../../assets/logo.png')} 
        style={{ width: 200, height: 200 }} />
    </View>
   <View>
   <Text style={tw`text-2xl font-bold `}>User ID</Text>
    <View style={tw `border py-2 px-3 rounded-md my-4`}>
    <Entypo name="fingerprint" size={24} color="black"  style={tw `border-r-2 w-[10%]` } />
    <View/>
    </View>
   </View>
   <View style={tw`absolute bottom-5 left-5 w-full`}>
        <TouchableOpacity style={tw`bg-[#3E9850] py-3 rounded-lg`}>
          <Pressable onPress={() => router.push('/send/emmpay/send')}>
            <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}