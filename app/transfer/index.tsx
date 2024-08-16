import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable, Modal, FlatList } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import tw from 'twrnc';
import BackButton from '@/components/backbutton';
import { router } from 'expo-router';

export default function TransferPage() {
  const [selectedBank, setSelectedBank] = useState<string>('First Bank');
  const [isBankModalVisible, setIsBankModalVisible] = useState<boolean>(false);

  const banks = ['First Bank', 'Polaris Bank', 'Eco Bank', 'Kuda Bank', 'PalmPay', 'Opay'];

  const renderBankItem = (bank: string) => (
    <Pressable
      style={tw`p-4 border-b border-gray-200`}
      onPress={() => {
        setSelectedBank(bank);
        setIsBankModalVisible(false);
      }}
    >
      <Text style={tw`text-lg`}>{bank}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center mb-6`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center mr-10 flex-1`}>Transfer</Text>
        {/* Empty View for Spacing */}
        <View style={tw`w-10`} />
      </View>

      {/* Available Balance */}
      <View style={tw`items-center justify-center mb-10`}>
        <Text style={tw`text-sm bg-[#C9D0FF] py-2 px-4 rounded-md text-center`}>
          Available Balance: $1,565,520.57
        </Text>
      </View>

      {/* Account Number Input */}
      <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Account Number</Text>
        <TextInput
          placeholder="Enter account number"
          style={tw`py-3 px-4 border rounded-lg text-lg`}
        />
      </View>

      {/* Select Bank Input */}
      <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Select Bank</Text>
        <Pressable onPress={() => setIsBankModalVisible(true)}>
          <View style={tw`relative`}>
            <TextInput
              value={selectedBank}
              placeholder="First Bank"
              style={tw`py-3 px-4 border rounded-lg text-lg`}
              editable={false}
            />
            <Entypo
              name="chevron-down"
              size={24}
              color="black"
              style={tw`absolute top-3 right-4`}
            />
          </View>
        </Pressable>
      </View>

      {/* Beneficiary Name */}
      <Text style={tw`bg-[#A4C0AA] text-white text-center py-3 px-4 rounded-md mb-10`}>
        Chisom Nweke Mary
      </Text>

      {/* Next Button */}
      <TouchableOpacity
        style={tw`bg-[#3E9850] py-4 rounded-lg absolute bottom-5 left-5 right-5`}
      >
        <Pressable onPress={() => router.push('/transfer/send')}>
          <Text style={tw`text-white text-center text-lg font-semibold`}>
            Next
          </Text>
        </Pressable>
      </TouchableOpacity>

      {/* Modal for Bank Selection */}
      <Modal visible={isBankModalVisible} transparent animationType="slide">
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white w-4/5 rounded-lg`}>
            <FlatList
              data={banks}
              keyExtractor={(item) => item}
              renderItem={({ item }) => renderBankItem(item)}
            />
            <Pressable
              style={tw`p-4 bg-gray-100 rounded-lg`}
              onPress={() => setIsBankModalVisible(false)}
            >
              <Text style={tw`text-center text-lg font-bold text-gray-700`}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
