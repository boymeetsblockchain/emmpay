import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import BackButton from '@/components/backbutton';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function Emmpay() {
  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10 bg-white relative`}>
     
      <View style={tw`flex-row items-center mb-8`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center mr-20 flex-1`}>Send</Text>
       
      </View>

      <View style={tw`my-3`}>
        <Text style={tw`text-xl text-[#3E9850] font-bold text-center mb-2`}>Select Destination Country</Text>
        <Text style={tw`text-sm text-black font-bold text-center`}>Choose the country you are sending money to</Text>
      </View>
      <View style={tw`flex-row items-center border rounded-md px-4 h-16 w-full bg-white`}>

      <Entypo name="magnifying-glass" size={24} color="black" style={tw`mr-2 border-r-2 h-full py-4 px-2 items-center justify-center `} />
   
      <TextInput
        placeholder="Search for currency or country"
        style={tw`flex-1 text-base`}
      />
    </View>

    <View>
    <View style={tw ` my-10 `}>
    <Image  source={require('../../../assets/flags.png')}  />
    </View>
    </View>
    <View style={tw`absolute bottom-5 left-0 right-0 px-5`}>
        <TouchableOpacity style={tw`bg-[#3E9850] py-3 rounded-lg`}>
          <Pressable onPress={() => router.push('/send/bank/form')}>
            <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
