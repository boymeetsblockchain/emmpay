import BackButton from '@/components/backbutton';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function TransferPage() {
  const snapPoints = useMemo(() => ['40%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-8 bg-white`}>
   
      <View style={tw`flex-row items-center mb-8`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center flex-1`}>Send</Text>
      </View>


      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-sm bg-[#C9D0FF] py-2 px-4 rounded-md text-center`}>
          Available Balance: $1,565,520.57
        </Text>
      </View>

    
      <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Amount</Text>
        <TextInput placeholder="Enter amount" style={tw`py-3 px-4 border rounded-lg text-lg`} />
      </View>


      <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Description</Text>
        <View style={tw`relative`}>
          <TextInput placeholder="First Bank" style={tw`py-3 px-4 border rounded-lg text-lg`} />
          <Entypo name="chevron-down" size={24} color="black" style={tw`absolute top-3 right-4`} />
        </View>
      </View>

      <View style={tw`flex-row justify-between items-center mb-10`}>
        <Text style={tw`font-bold text-xl`}>Fee:</Text>
        <Text style={tw`text-lg`}>NGN 0.00</Text>
      </View>


      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <View style={tw`px-4 py-2`}>
       
          <View style={tw`flex-row items-center justify-between mb-4`}>
            <Pressable onPress={handleClosePress}>
              <Text style={tw`text-2xl font-bold`}>X</Text>
            </Pressable>
            <Text style={tw`font-bold text-2xl`}>Payment Method</Text>
            <View /> 
          </View>

 
          <View style={tw`flex-col gap-y-6`}>
            <TouchableOpacity style={tw`bg-gray-100 rounded-lg py-4 px-6 shadow-md flex-row items-center justify-between`}>
              <Text style={tw`font-bold text-xl`}>Debit Card</Text>
              <Entypo name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-100 rounded-lg py-4 px-6 shadow-md flex-row items-center justify-between`}>
              <Text style={tw`font-bold text-xl`}>Wallet Balance</Text>
              <Entypo name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>

  
      <TouchableOpacity
        style={tw`bg-[#3E9850] py-4 rounded-lg absolute bottom-5 left-5 right-5`}
      >
        <Pressable onPress={() => router.push('/transfer/confirmation')}>
          <Text style={tw`text-white text-center text-lg font-semibold`}>
            Done
          </Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
