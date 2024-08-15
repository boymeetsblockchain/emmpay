import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={tw`flex-1 py-3 px-5 bg-white`}>
      <View style={tw`mt-2`}>
        <View style={tw`flex-row justify-between items-center`}>
          {/* Greeting and Image Section */}
          <View style={tw`flex-row items-center gap-x-3`}>
            <Image 
              source={require('../../../assets/home.png')} 
              style={tw`w-12 h-12`} 
            />
            <Text style={tw`text-2xl font-bold`}>Hi Divine 👋</Text>
          </View>

          {/* Action Section */}
          <View style={tw`flex-row items-center gap-x-4`}>
            <View style={tw`flex-row items-center gap-x-2`}>
              <Text style={tw`text-lg font-bold`}>Add Money</Text>
              <AntDesign name="plussquare" size={24} color="#200E32" />
            </View>

            {/* Notification Bell */}
            <View style={tw`relative`}>
              <Feather name="bell" size={24} color="black" />
              <Text style={tw`absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full`}>
                99+
              </Text>
            </View>
          </View>
        </View>

        {/* Account Balance Section */}
        <View style={tw`w-full bg-[#030D13] rounded-md p-4 mt-10`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <View style={tw`flex-row items-center bg-white rounded-full px-3 py-1.5`}>
              <Image 
                source={require('../../../assets/flag.png')} 
                style={tw`w-8 h-8 rounded-full`} 
              />
              <Text style={tw`text-black text-sm ml-2`}>United States Dollar</Text>
              <Entypo name="chevron-down" size={20} color="black" style={tw`ml-2`} />
            </View>
            <View style={tw`bg-white p-2 rounded-full`}> 
              <Feather name="download" size={24} color="#3E9850" />
            </View>
          </View>

          <View style={tw`flex-col gap-y-6 justify-between items-center`}>
            <Text style={tw`text-white text-2xl font-bold`}>Account Balance</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-white text-4xl font-bold mr-2`}>$2,580,440.30</Text>
              <Feather name="eye" size={24} color="white" />
            </View>
          </View>
        </View>

        {/* Icons Section */}
        <View style={tw`my-5 flex-col gap-y-4`}>
          <View style={tw`flex-row justify-between items-center`}>
            <View style={tw`flex-col items-center gap-y-4`}>
              <View style={tw`bg-white shadow-md p-4 rounded-md`}> 
                <FontAwesome name="telegram" size={24} color="#3E9850" />
              </View>
              <Text style={tw`font-bold text-xl`}>Send</Text>
            </View>
            <View style={tw`flex-col items-center gap-y-4`}>
              <View style={tw`bg-white shadow-md p-4 rounded-md`}> 
                <MaterialIcons name="compare-arrows" size={24} color="green" />
              </View>
              <Text style={tw`font-bold text-xl`}>Convert</Text>
            </View>
            <Pressable onPress={()=>router.push('/transfer/')} style={tw`flex-col items-center gap-y-4`}>
              <View style={tw`bg-white shadow-md p-4 rounded-md`}> 
                <Feather name="arrow-up-right" size={24} color="green" />
              </View>
              <Text style={tw`font-bold text-xl`}>Transfer</Text>
            </Pressable>
            <View style={tw`flex-col items-center gap-y-4`}>
              <View style={tw`bg-white shadow-md p-4 rounded-md`}> 
                <Ionicons name="bag" size={24} color="green" />
              </View>
              <Text style={tw`font-bold text-xl`}>Cash Out</Text>
            </View>
          </View>
          <View>
            <Image 
              source={require('../../../assets/global.png')} 
              style={tw`w-full rounded-md`} 
            />
          </View>
          <View style={tw`flex-row items-center justify-center gap-x-3`}>
            <FontAwesome name="circle" size={16} color="#757272" />
            <FontAwesome name="circle" size={16} color="green" />
            <FontAwesome name="circle" size={16} color="#757272" />
          </View>
        </View>

        {/* Recent Transactions Section */}
        <View style={tw`flex-col gap-y-4`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-lg font-bold`}>Recent Transactions</Text>
            <Text style={tw`text-lg text-[#6665DD]`}>Sell All</Text>
          </View>
          <View style={tw`flex-row mb-5 gap-x-4`}>
            <Text style={tw`px-4 rounded-lg py-2 shadow-md bg-white text-lg font-bold`}>All</Text>
            <Text style={tw`px-4 rounded-lg py-2 shadow-md text-lg font-bold bg-gray-200 text-gray-400`}>Credit</Text>
            <Text style={tw`px-4 rounded-lg py-2 shadow-md text-lg font-bold bg-gray-200 text-gray-400`}>Debit</Text>
          </View>
          <View style={tw`flex-row gap-x-3`}>
            <MaterialCommunityIcons name="clock-time-eight" size={24} color="grey" />
            <Text style={tw`text-gray-400 font-medium text-xl`}>Today</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Image 
              source={require('../../../assets/home.png')} 
              style={tw`w-12 h-12`} 
            />
            <View>
              <Text style={tw`text-2xl font-bold`}>John Fonesca</Text>
              <Text style={tw`text-gray-400 text-2xl`}>10:30pm</Text>
            </View>
            <Text style={tw`text-[#8FC93A] font-bold`}>+ $1,800,400</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
