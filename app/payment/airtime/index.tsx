import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Pressable, ImageSourcePropType } from 'react-native';
import BackButton from '@/components/backbutton';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';

type Provider = 'mtn' | 'airtel' | 'glo' | 'nine_mobile';

interface DataType {
  [key: string]: {
    title: string;
    imgSrc: ImageSourcePropType;
  };
}

const dataType: DataType = {
  mtn: {
    title: 'MTN',
    imgSrc: require('../../../assets/mtn.png'),
  },
  airtel: {
    title: 'Airtel',
    imgSrc: require('../../../assets/airtel.png'),
  },
  glo: {
    title: 'GLO',
    imgSrc: require('../../../assets/glo.jpeg'),
  },
  nine_mobile: {
    title: '9Mobile',
    imgSrc: require('../../../assets/9.jpeg'),
  },
};

export default function Airtime() {
  // State to track the selected provider
  const [selectedProvider, setSelectedProvider] = useState<Provider>('mtn');
  const [isPickerVisible, setPickerVisible] = useState<boolean>(false);

  // Function to handle provider selection
  const handleProviderChange = (providerKey: Provider) => {
    setSelectedProvider(providerKey);
    setPickerVisible(false);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white relative`}>
      <View style={tw`px-5 pt-10`}>
        {/* Header */}
        <View style={tw`flex-row items-center mb-8`}>
          <BackButton />
          <Text style={tw`text-2xl font-bold text-center flex-1 mr-20`}>Airtime</Text>
        </View>

        {/* Input and Dropdown Section */}
        <View style={tw`my-5`}>
          <View style={tw`flex-row items-center border-b border-gray-300 bg-white rounded-md`}>
            {/* Dropdown for selecting provider */}
            <TouchableOpacity
              style={tw`flex-row items-center border-r border-gray-300 pl-2 pr-4`}
              onPress={() => setPickerVisible(!isPickerVisible)}
            >
              <Image
                source={dataType[selectedProvider].imgSrc}
                style={tw`w-8 h-8 rounded-full`}
              />
              <Entypo name='chevron-down' color='black' size={16} />
            </TouchableOpacity>

            <TextInput
              style={tw`flex-1 py-3 px-4`}
              placeholder='Enter Your number'
              keyboardType='phone-pad'
            />
          </View>

          {/* Dropdown List */}
          {isPickerVisible && (
            <View style={tw`border border-gray-300 mt-2 rounded-md`}>
              {Object.keys(dataType).map((providerKey) => (
                <TouchableOpacity
                  key={providerKey}
                  style={tw`flex-row items-center py-2 px-4`}
                  onPress={() => handleProviderChange(providerKey as Provider)}
                >
                  <Image
                    source={dataType[providerKey].imgSrc}
                    style={tw`w-8 h-8 mr-4 rounded-full`}
                  />
                  <Text style={tw`text-lg`}>{dataType[providerKey].title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Amount Selection Buttons */}
        <View style={tw`flex-row flex-wrap items-center gap-4`}>
          {['₦50', '₦100', '₦200', '₦500', '₦1000', '₦2000', '₦5000', '₦10000', '₦100000'].map((amount) => (
            <Text
              key={amount}
              style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}
            >
              {amount}
            </Text>
          ))}
        </View>

        {/* Custom Amount Input */}
        <View>
          <Text style={tw`text-xl font-bold text-center mt-4 mb-2`}>Amount</Text>
          <TextInput
            placeholder='₦'
            style={tw`py-2 border rounded-md border-[#D9D9D9] px-3`}
          />
        </View>
      </View>

      {/* Confirm Button */}
      <View style={tw`absolute bottom-0 left-0 w-full mb-3 px-3`}>
        <TouchableOpacity style={tw`bg-[#3E9850] py-3 rounded-lg`}>
          <Pressable>
            <Text style={tw`text-white text-center text-lg font-semibold`}>Confirm</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
