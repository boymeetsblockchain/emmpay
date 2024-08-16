import { router } from 'expo-router';
import { View, Text, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import tw from 'twrnc';
import Entypo from '@expo/vector-icons/Entypo'; 
export default function SuccessPage() {
  return (
    <SafeAreaView style={tw`flex-1 py-10 px-5 bg-white`}>
     
      <Text style={tw`text-2xl font-bold self-end`}>X</Text>

  
      <View style={tw`flex-1 items-center justify-center`}>
        <Entypo name="check" size={100} color="#3E9850" />
        <Text style={tw`text-center text-2xl my-4`}>Success</Text>
        <Text style={tw`text-center text-sm my-4`}>Your payment has been successfully processed.</Text>
      </View>

     
      <TouchableOpacity
        style={tw`bg-[#3E9850] py-4 rounded-lg absolute bottom-5 left-5 right-5`}
      >
        <Pressable onPress={() => router.push('/transfer/receipt')}>
          <Text style={tw`text-white text-center text-lg font-semibold`}>Share Receipt</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
