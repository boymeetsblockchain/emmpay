import BackButton from '@/components/backbutton';
import tw from 'twrnc';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Send() {
  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10 relative`}>
      {/* Header */}
      <View style={tw`flex-row items-center mb-8`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-center  mr-20 flex-1`}>Send</Text>
      </View>

      {/* Amount to Send */}
      <View style={tw`bg-gray-100 rounded-lg h-20 shadow-md flex-row items-center mb-4`}>
        <View style={tw`flex-1  px-3`}>
          <Text style={tw`text-gray-400 text-lg`}>You send</Text>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            style={tw`text-3xl font-bold text-gray-800`}
          />
        </View>
        <View style={tw`bg-[#95CFA1CC] w-[30%] items-center h-full flex-row justify-center rounded-lg ml-2`}>
          <Image source={require('../../../assets/us.png')} style={tw`mr-2`} />
          <Text style={tw`text-lg font-bold`}>USD</Text>
        </View>
      </View>

      {/* Rate and Bonus */}
      <View style={tw`border-l-2 border-gray-300 pl-4 mb-6`}>
        <View style={tw`flex-row items-center justify-between mb-4`}>
          <View style={tw`flex-row items-center gap-x-2`}>
            <Entypo name="line-graph" size={24} color="green" />
            <Text style={tw`text-lg`}>Rate</Text>
          </View>
          <Text style={tw`text-gray-500 `}>1 USD = 1556.24 NGN</Text>
        </View>

        <View style={tw`flex-row items-center justify-between mb-4`}>
          <View style={tw`flex-row items-center gap-x-2`}>
            <Entypo name="colours" size={24} color="green" />
            <Text style={tw`text-lg`}>Bonus</Text>
          </View>
          <Text style={tw`text-gray-500`}>1 USD = 1556.39 NGN</Text>
        </View>

        <View style={tw`flex-row items-center justify-between mb-4`}>
          <View style={tw`flex-row items-center gap-x-2`}>
            <Entypo name="cycle" size={24} color="green" />
            <Text style={tw`text-lg`}>Frequency</Text>
          </View>
          <Text style={tw`text-gray-500`}>One-time</Text>
        </View>

        <View style={tw`flex-row items-center justify-between mb-4`}>
          <View style={tw`flex-row items-center gap-x-2`}>
            <Entypo name="wallet" size={24} color="green" />
            <Text style={tw`text-lg`}>Wallet balance</Text>
          </View>
          <Text style={tw`text-gray-500`}>Select</Text>
        </View>
      </View>

      {/* Amount to Receive */}
      <View style={tw`bg-gray-100 rounded-lg h-20 shadow-md flex-row items-center mb-4 `}>
        <View style={tw`flex-1 px-3`}>
          <Text style={tw`text-gray-400 text-lg`}>They receive</Text>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            style={tw`text-3xl font-bold text-gray-800`}
          />
        </View>
        <View style={tw`bg-[#95CFA1CC] w-[30%] items-center h-full flex-row justify-center rounded-lg ml-2`}>
          <Image source={require('../../../assets/nig.png')} style={tw`mr-2`} />
          <Text style={tw`text-lg font-bold`}>NGN</Text>
        </View>
      </View>

      {/* Next Button */}
      <View style={tw`absolute bottom-5 left-0 right-0 px-5`}>
        <TouchableOpacity style={tw`bg-[#3E9850] py-3 rounded-lg`}>
          <Pressable onPress={() => router.push('/transfer/confirmation')}>
            <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
