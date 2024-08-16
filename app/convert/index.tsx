import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Pressable, Modal, TouchableOpacity, FlatList } from 'react-native';
import BackButton from '@/components/backbutton';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

export default function Convert() {
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('NGN');
  const [isFromModalVisible, setIsFromModalVisible] = useState<boolean>(false);
  const [isToModalVisible, setIsToModalVisible] = useState<boolean>(false);

  const currencies: string[] = ['NGN', 'USD', 'CAD', 'EUR'];

  const renderCurrencyItem = (
    currency: string,
    setCurrency: React.Dispatch<React.SetStateAction<string>>,
    closeModal: () => void
  ) => (
    <Pressable 
      style={tw`p-4 border-b border-gray-200`}
      onPress={() => {
        setCurrency(currency);
        closeModal();
      }}
    >
      <Text style={tw`text-lg`}>{currency}</Text>
    </Pressable>
  );

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
          <Pressable onPress={() => setIsFromModalVisible(true)}>
            <View style={tw`relative`}>
              <TextInput 
                value={fromCurrency}
                placeholder='USD' 
                style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
                editable={false} 
              />
              <Entypo name="chevron-down" size={20} color="black" style={tw`absolute top-3 right-3`} />
            </View>
          </Pressable>
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
          <Pressable onPress={() => setIsToModalVisible(true)}>
            <View style={tw`relative`}>
              <TextInput 
                value={toCurrency}
                placeholder='NGN' 
                style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
                editable={false} 
              />
              <Entypo name="chevron-down" size={20} color="black" style={tw`absolute top-3 right-3`} />
            </View>
          </Pressable>
        </View>
      </View>

      {/* Next Button */}
      <View style={tw`absolute bottom-5 left-5 w-full`}>
        <TouchableOpacity style={tw`bg-[#3E9850] py-3 rounded-lg`}>
          <Pressable onPress={() => router.push('/dashboard')}>
            <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
          </Pressable>
        </TouchableOpacity>
      </View>

      {/* Modal for From Currency */}
      <Modal visible={isFromModalVisible} transparent animationType="slide">
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white w-4/5 rounded-lg`}>
            <FlatList
              data={currencies}
              keyExtractor={(item) => item}
              renderItem={({ item }) => renderCurrencyItem(item, setFromCurrency, () => setIsFromModalVisible(false))}
            />
            <Pressable 
              style={tw`p-4 bg-gray-100 rounded-lg`}
              onPress={() => setIsFromModalVisible(false)}
            >
              <Text style={tw`text-center text-lg font-bold text-gray-700`}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal for To Currency */}
      <Modal visible={isToModalVisible} transparent animationType="slide">
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white w-4/5 rounded-lg`}>
            <FlatList
              data={currencies}
              keyExtractor={(item) => item}
              renderItem={({ item }) => renderCurrencyItem(item, setToCurrency, () => setIsToModalVisible(false))}
            />
            <Pressable 
              style={tw`p-4 bg-gray-100 rounded-lg`}
              onPress={() => setIsToModalVisible(false)}
            >
              <Text style={tw`text-center text-lg font-bold text-gray-700`}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
