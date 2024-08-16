import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Pressable, ImageSourcePropType, Switch } from 'react-native';
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
    title: 'Dstv',
    imgSrc: require('../../../assets/dstv.png'),
  },
  airtel: {
    title: 'Gotv',
    imgSrc: require('../../../assets/gotv.png'),
  },
  glo: {
    title: 'Startimes',
    imgSrc: require('../../../assets/startimes.png'),
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
          <Text style={tw`text-2xl font-bold text-center flex-1 mr-20`}>Tv</Text>
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

          <View style={tw `gap-y-3`}>
          <View style={tw `relative gap-y-1`}>
          <Text style={tw `text-sm `}>Smartcard Number</Text>
          <TextInput placeholder='Enter Smartcard Number' style={tw`py-3  border-b`} />
          <Entypo name='user' size={16} color={"black"} style={tw`absolute top-7 right-3`}/>
          <View style={tw `items-center flex-row justify-between`}> 
          <Text style={tw `text-sm `}>Save as Beneficiaries</Text>
          <Switch/>
          </View>
        </View>
        <View style={tw `relative gap-y-1`}>
          <Text style={tw `text-sm `}>Amount</Text>
          <TextInput placeholder='Amount' style={tw`py-3  border-b`} />
          <Entypo name='user' size={16} color={"black"} style={tw`absolute top-7 right-3`}/>
          <View style={tw `items-center flex-row justify-between`}> 
          <Text style={tw `text-sm `}>Save as Beneficiaries</Text>
          <Switch/>
          </View>
        </View>
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
