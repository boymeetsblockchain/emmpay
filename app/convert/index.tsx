import { View, Text, SafeAreaView, TextInput, Pressable, TouchableOpacity } from 'react-native'
import BackButton from '@/components/backbutton'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'

export default function Convert() {
  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10`}>
      <View style={tw`flex-row items-center mb-8`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center mr-20 flex-1`}>Convert</Text>
      </View>

    
      <View style={tw`items-center mb-8`}>
        <Text style={tw`text-sm bg-[#C9D0FF] py-2 px-3 rounded-md text-center`}>Available Balance: $1,565,520.57</Text>
      </View>

      {/* Currency Selection Fields */}
      <View style={tw`gap-y-8`}>
        
        {/* From Currency */}
        <View>
          <Text style={tw`text-lg font-bold mb-2`}>From Currency</Text>
          <View style={tw`relative`}>
            <TextInput 
              placeholder='USD' 
              style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
            />
            <Entypo name="chevron-down" size={20} color="black" style={tw`absolute top-3 right-3`} />
          </View>
        </View>

        {/* Amount Field */}
        <View>
          <Text style={tw`text-lg font-bold mb-2`}>Amount</Text>
          <View style={tw`relative`}>
            <TextInput 
              placeholder='$41,0000' 
              style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
            />
            <Text style={tw`absolute top-3 right-3 text-sm`}>$41,0000</Text>
          </View>
        </View>

        {/* Swap Icon */}
        <View style={tw`items-center my-4`}>
          <AntDesign name="swap" size={30} color="white" style={tw`rounded-full bg-[#3E9850] p-2`} />
        </View>

        {/* To Currency */}
        <View>
          <Text style={tw`text-lg font-bold mb-2`}>To Currency</Text>
          <View style={tw`relative`}>
            <TextInput 
              placeholder='NGN' 
              style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
            />
            <Entypo name="chevron-down" size={20} color="black" style={tw`absolute top-3 right-3`} />
          </View>
        </View>
      </View>

 
      <View style={tw`absolute bottom-5 left-5 w-full`}>
        <TouchableOpacity style={tw`bg-[#3E9850] py-3 rounded-lg`}>
          <Pressable onPress={() => router.push('/dashboard')}>
            <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
