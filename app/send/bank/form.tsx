import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';
import tw from 'twrnc';
import BackButton from '@/components/backbutton';
import { router } from 'expo-router';

export default function Emmpay() {
  const [selectedCountry, setSelectedCountry] = useState('Austria');
  const [recipientType, setRecipientType] = useState('Individual');

  return (
    <SafeAreaView style={tw`flex-1  pt-10 relative`}>
      <View style={tw`flex-row items-center mb-8`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center mr-20 flex-1`}>Send</Text>
      </View>
      
      <View style={tw`items-center mb-8`}>
        <Text style={tw`text-sm bg-[#C9D0FF] py-2 px-3 rounded-md text-center`}>
          Available Balance: $1,565,520.57
        </Text>
      </View>
      
      <View style={tw`px-5`}>
        <View style={tw`mb-4`}>
          <Text style={tw`text-base font-medium mb-2`}>Recipient Country</Text>
          <TouchableOpacity style={tw`border p-3 rounded-md flex-row items-center`} onPress={() => {}}>
            <Text style={tw`flex-1`}>{selectedCountry}</Text>
            <Entypo name="chevron-down" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-base font-medium mb-2`}>Recipient Type</Text>
          <TouchableOpacity style={tw`border p-3 rounded-md flex-row items-center`} onPress={() => {}}>
            <Text style={tw`flex-1`}>{recipientType}</Text>
            <Entypo name="chevron-down" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-base font-medium mb-2`}>IBAN</Text>
          <TextInput 
            style={tw`border p-3 rounded-md`} 
            placeholder="Enter recipient IBAN" 
          />
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-base font-medium mb-2`}>Bank Name</Text>
          <TextInput 
            style={tw`border p-3 rounded-md`} 
            placeholder="Enter bank name" 
          />
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-base font-medium mb-2`}>First Name</Text>
          <TextInput 
            style={tw`border p-3 rounded-md`} 
            placeholder="Enter first name" 
          />
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`text-base font-medium mb-2`}>Last Name</Text>
          <TextInput 
            style={tw`border p-3 rounded-md`} 
            placeholder="Enter last name" 
          />
        </View>
        
        <TouchableOpacity style={tw`bg-[#3E9850] p-3  rounded-md`} onPress={() => {router.push('/send/emmpay/send')}}>
          <Text style={tw`text-white text-center text-lg`}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
