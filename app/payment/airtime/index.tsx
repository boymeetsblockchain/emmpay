import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import BackButton from '@/components/backbutton';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Airtime() {
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
          <View style={tw`flex-row items-center border-b  border-gray-300 bg-white rounded-md`}>
          <View style={tw`flex-row items-center border-r border-gray-300 pl-2 pr-4`}>
              <Image
                source={require('../../../assets/mtn.png')}
      
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

        <View style={tw `flex-row flex-wrap items-center gap-4`}>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦50
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦100
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦200
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦500
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦1000
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦2000
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦5000
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦10000
          </Text>
          <Text style={tw`bg-[#D9D9D9] rounded-md text-black w-[20%] text-center py-4 px-2`}>
          ₦100000
          </Text>
        </View>

        <View>
        <Text style={tw`text-xl font-bold text-center mt-4 mb-2`}>Amount</Text>
         <TextInput placeholder='₦' style={tw `py-2 border  rounded-md border-[#D9D9D9] px-3`}/>

        </View>
      </View>

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
