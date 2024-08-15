import BackButton from '@/components/backbutton'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import tw from 'twrnc'
import { router } from 'expo-router';
export default function TransferPage() {
  return (
    <SafeAreaView style={tw `flex-1 px-5 pt-10 relative`}>
    <View style={tw `flex-row gap-x-10`}>
            <BackButton/>
          <Text style={tw`text-2xl font-bold text-center ml-8 mb-4`}>Transfer</Text>
          </View>
          <View style={tw `items-center justify-center my-10`}>
            <Text style={tw `text-sm bg-[#C9D0FF] py-1.5 px-2 rounded-md text-center w-[200px]`}>Available Balance: $1,565,520.57</Text>
          </View>
          <View>
            <Text style={tw `font-bold text-2xl `}>Account Number</Text>
            <TextInput placeholder='' style={tw`py-2 border rounded-lg px-3 text-sm `} />
          </View>
             <View style={{marginVertical:20}}>
             <Text style={tw `font-bold text-2xl `}>Select Bank</Text>
            <View style={tw `relative`}>
            <TextInput placeholder='First Bank' style={tw`py-2 border rounded-lg px-3 text-sm `} />
            <Entypo name="chevron-down" size={20} color="black"  style={tw  ` absolute top-2 right-2`} />
            <View/>
            </View>
        
          </View>
          <Text style={tw `bg-[#A4C0AA] text-white text-center py-2 px-3 rounded-md `}>
          Chisom Nweke Mary
          </Text>
          <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4  absolute bottom-2  left-5  w-full` }
        >
       <Pressable onPress={()=>router.push('/transfer/send')}>
       <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
       </Pressable>
        </TouchableOpacity>
    </SafeAreaView>
  )
}