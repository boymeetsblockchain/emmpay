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
    <ScrollView contentContainerStyle={tw`p-5 bg-white`}>
      <View>
        {/* Header Section */}
        <View style={tw`flex-row justify-between items-center mb-5`}>
          <View style={tw`flex-row items-center`}>
            <Image source={require('../../../assets/head.webp')} style={tw`w-12 h-12 rounded-full`} />
            <Text style={tw`ml-3 text-2xl font-bold`}>Hi Divine 👋</Text>
          </View>

          <View style={tw`flex-row items-center gap-x-4`}>
            <Pressable style={tw`flex-row items-center`}>
              <Text style={tw`text-lg font-bold mr-2`}>Add Money</Text>
              <AntDesign name="plussquare" size={24} color="#200E32" />
            </Pressable>

            <View style={tw`relative`}>
              <Feather name="bell" size={24} color="black" />
              <Text style={tw`absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full`}>
                99+
              </Text>
            </View>
          </View>
        </View>

        {/* Account Balance Section */}
        <View style={tw`bg-[#030D13] rounded-md p-4 mb-10`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <View style={tw`flex-row items-center bg-white rounded-full px-3 py-1.5`}>
              <Image source={require('../../../assets/flag.png')} style={tw`w-8 h-8 rounded-full`} />
              <Text style={tw`text-black text-sm ml-2`}>United States Dollar</Text>
              <Entypo name="chevron-down" size={20} color="black" style={tw`ml-2`} />
            </View>
            <View style={tw`bg-white p-2 rounded-full`}>
              <Feather name="download" size={24} color="#3E9850" />
            </View>
          </View>

          <View style={tw`items-center`}>
            <Text style={tw`text-white text-xl mb-2`}>Account Balance</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-white text-4xl font-bold`}>$2,580,440.30</Text>
              <Feather name="eye" size={24} color="white" style={tw`ml-2`} />
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={tw`flex-row justify-between mb-8`}>
          <Pressable onPress={() => router.push('/send')} style={tw`items-center`}>
            <View style={tw`bg-white shadow-md p-4 rounded-md mb-2`}>
              <FontAwesome name="telegram" size={24} color="#3E9850" />
            </View>
            <Text style={tw`text-lg font-bold`}>Send</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/convert')} style={tw`items-center`}>
            <View style={tw`bg-white shadow-md p-4 rounded-md mb-2`}>
              <MaterialIcons name="compare-arrows" size={24} color="green" />
            </View>
            <Text style={tw`text-lg font-bold`}>Convert</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/transfer/')} style={tw`items-center`}>
            <View style={tw`bg-white shadow-md p-4 rounded-md mb-2`}>
              <Feather name="arrow-up-right" size={24} color="green" />
            </View>
            <Text style={tw`text-lg font-bold`}>Transfer</Text>
          </Pressable>
          <Pressable style={tw`items-center`}>
            <View style={tw`bg-white shadow-md p-4 rounded-md mb-2`}>
              <Ionicons name="bag" size={24} color="green" />
            </View>
            <Text style={tw`text-lg font-bold`}>Cash Out</Text>
          </Pressable>
        </View>

        {/* Promotional Banner */}
        <Image source={require('../../../assets/global.png')} style={tw`w-full rounded-md mb-5`} />
        <View style={tw`flex-row justify-center mb-8`}>
          <FontAwesome name="circle" size={16} color="#757272" style={tw`mx-1`} />
          <FontAwesome name="circle" size={16} color="green" style={tw`mx-1`} />
          <FontAwesome name="circle" size={16} color="#757272" style={tw`mx-1`} />
        </View>

        {/* Recent Transactions */}
        <View>
          <View style={tw`flex-row justify-between mb-5`}>
            <Text style={tw`text-lg font-bold`}>Recent Transactions</Text>
            <Text style={tw`text-lg text-[#6665DD]`}>See All</Text>
          </View>

          <View style={tw`flex-row mb-4`}>
            <Text style={tw`px-4 py-2 bg-white shadow-md rounded-lg text-lg font-bold`}>All</Text>
            <Text style={tw`px-4 py-2 ml-2 bg-gray-200 text-gray-400 shadow-md rounded-lg text-lg font-bold`}>
              Credit
            </Text>
            <Text style={tw`px-4 py-2 ml-2 bg-gray-200 text-gray-400 shadow-md rounded-lg text-lg font-bold`}>
              Debit
            </Text>
          </View>

          <View style={tw`flex-row items-center mb-4`}>
            <MaterialCommunityIcons name="clock-time-eight" size={24} color="grey" />
            <Text style={tw`ml-3 text-xl text-gray-400`}>Today</Text>
          </View>

          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Image source={require('../../../assets/head.webp')} style={tw`w-12 h-12 rounded-full`} />
            <View>
              <Text style={tw`text-2xl font-bold`}>John Fonesca</Text>
              <Text style={tw`text-gray-400 text-xl`}>10:30pm</Text>
            </View>
            <Text style={tw`text-[#8FC93A] font-bold`}>+ $1,800,400</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
