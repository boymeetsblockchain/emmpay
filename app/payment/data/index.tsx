import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '@/components/backbutton';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function Airtime() {
  const [selectedBundle, setSelectedBundle] = useState('Select Bundles');
  const [isPickerVisible, setPickerVisible] = useState(false);

  // List of bundles
  const bundles = [
    { label: '100MB for 1 day - ₦100', value: '100MB for 1 day - ₦100' },
    { label: '160MB for 30 days - ₦150', value: '160MB for 30 days - ₦150' },
    { label: '200MB for 3 days - ₦200', value: '200MB for 3 days - ₦200' },
    { label: '1GB for 1 day - ₦350', value: '1GB for 1 day - ₦350' },
    { label: '750MB for 14 days - ₦500', value: '750MB for 14 days - ₦500' },
    { label: '1GB + YouTube for 7 days - ₦600', value: '1GB + YouTube for 7 days - ₦600' },
    { label: '3GB for 2 days - ₦800', value: '3GB for 2 days - ₦800' },
    { label: '1.5GB for 30 days - ₦1200', value: '1.5GB for 30 days - ₦1200' },
    { label: '5GB for 7 days - ₦1500', value: '5GB for 7 days - ₦1500' },
    { label: '3GB for 30 days - ₦1600', value: '3GB for 30 days - ₦1600' },
    { label: '7GB for 7 days - ₦2000', value: '7GB for 7 days - ₦2000' },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white relative`}>
      <View style={tw`px-5 pt-10`}>
        {/* Header */}
        <View style={tw`flex-row items-center mb-8`}>
          <BackButton />
          <Text style={tw`text-2xl font-bold text-center flex-1 mr-20`}>Data</Text>
        </View>

        {/* Input and Dropdown Section */}
        <View style={tw`my-5`}>
          <View style={tw`flex-row items-center border-b border-gray-300 bg-white rounded-md`}>
            <View style={tw`flex-row items-center border-r border-gray-300 pl-2 pr-4`}>
              <Image
                source={require('../../../assets/mtn.png')}
                style={tw`w-12 h-12`} 
              />
              <Entypo name='chevron-down' color='black' size={16} />
            </View>
            <TextInput
              style={tw`flex-1 py-3 px-4`}
              placeholder='Enter Your number'
              keyboardType='phone-pad'
            />
          </View>
        </View>

        {/* Amount Selection */}
        <View>
          <TouchableOpacity
            style={tw`py-2 border rounded-md border-[#D9D9D9] px-3`}
            onPress={() => setPickerVisible(!isPickerVisible)}
          >
            <Text style={tw`text-center`}>{selectedBundle}</Text>
          </TouchableOpacity>

          {/* Inline Picker */}
          {isPickerVisible && (
            <Picker
              selectedValue={selectedBundle}
              onValueChange={(itemValue) => {
                setSelectedBundle(itemValue);
                setPickerVisible(false); // Hide picker after selection
              }}
              style={tw`bg-white mt-2`}
            >
              {bundles.map((bundle) => (
                <Picker.Item key={bundle.value} label={bundle.label} value={bundle.value} />
              ))}
            </Picker>
          )}
        </View>
      </View>

      {/* Confirm Button */}
      <View style={tw`absolute bottom-0 left-0 w-full mb-3 px-3`}>
        <TouchableOpacity style={tw`bg-[#3E9850] py-3 rounded-lg`}>
          <Text style={tw`text-white text-center text-lg font-semibold`}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
