import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Profile() {
  // States for editing fields
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingGender, setIsEditingGender] = useState(false);

  // States to store field values
  const [name, setName] = useState('Divine Ikemma');
  const [phone, setPhone] = useState('08737373729');
  const [email, setEmail] = useState('divineikemma@gmail.com');
  const [gender, setGender] = useState('Female');

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`px-5 pt-10`}>
        {/* Profile Header */}
        <View style={tw`flex-row justify-between items-center mb-8`}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <Text style={tw`text-2xl font-bold text-center`}>Profile</Text>
          <View style={tw`w-10`} /> 
        </View>

        {/* Profile Picture and Info */}
        <View style={tw`flex-col items-center gap-y-2 mb-8`}>
          <Image
            source={require('../../../assets/head.webp')}
            style={tw`w-24 h-24 rounded-full`}
          />
          <Text style={tw`text-2xl font-semibold`}>{name}</Text>
          <Text style={tw`text-lg text-gray-500`}>@Divkemma</Text>
        </View>

        {/* Profile Details */}
        <View style={tw`flex-col gap-y-5 mb-10`}>
          {/* Full Name */}
          <Pressable
            style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}
            onPress={() => setIsEditingName(!isEditingName)}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Full Name</Text>
              {isEditingName ? (
                <TextInput
                  style={tw`text-sm text-gray-600 border-b border-gray-400`}
                  value={name}
                  onChangeText={setName}
                  autoFocus
                />
              ) : (
                <Text style={tw`text-sm text-gray-600`}>{name}</Text>
              )}
            </View>
            <Ionicons name="pencil" size={24} color="black" />
          </Pressable>

          {/* Phone Number */}
          <Pressable
            style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}
            onPress={() => setIsEditingPhone(!isEditingPhone)}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Phone Number</Text>
              {isEditingPhone ? (
                <TextInput
                  style={tw`text-sm text-gray-600 border-b border-gray-400`}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  autoFocus
                />
              ) : (
                <Text style={tw`text-sm text-gray-600`}>{phone}</Text>
              )}
            </View>
            <Ionicons name="pencil" size={24} color="black" />
          </Pressable>

          {/* Email */}
          <Pressable
            style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}
            onPress={() => setIsEditingEmail(!isEditingEmail)}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Email</Text>
              {isEditingEmail ? (
                <TextInput
                  style={tw`text-sm text-gray-600 border-b border-gray-400`}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoFocus
                />
              ) : (
                <Text style={tw`text-sm text-gray-600`}>{email}</Text>
              )}
            </View>
            <Ionicons name="pencil" size={24} color="black" />
          </Pressable>

          {/* Gender */}
          <Pressable
            style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}
            onPress={() => setIsEditingGender(!isEditingGender)}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Gender</Text>
              {isEditingGender ? (
                <TextInput
                  style={tw`text-sm text-gray-600 border-b border-gray-400`}
                  value={gender}
                  onChangeText={setGender}
                  autoFocus
                />
              ) : (
                <Text style={tw`text-sm text-gray-600`}>{gender}</Text>
              )}
            </View>
            <Ionicons name="pencil" size={24} color="black" />
          </Pressable>
        </View>

        {/* Settings and Help Section */}
        <View style={tw`flex-col gap-y-6 mb-10`}>
          {/* Settings */}
          <Pressable
            onPress={() => router.push('/settings')}
            style={({ pressed }) => [
              tw`p-4 bg-gray-100 rounded-lg`,
              pressed && tw`bg-gray-200`,
            ]}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Settings</Text>
              <Text style={tw`text-sm text-gray-600`}>
                Control your notification and security settings
              </Text>
            </View>
          </Pressable>

          {/* Get Help */}
          <Pressable
            onPress={() => router.push('/contact/')}
            style={({ pressed }) => [
              tw`p-4 bg-gray-100 rounded-lg`,
              pressed && tw`bg-gray-200`,
            ]}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Get Help</Text>
              <Text style={tw`text-sm text-gray-600`}>Get support or send feedback</Text>
            </View>
          </Pressable>
        </View>

        {/* Social Media Links */}
        <View style={tw`flex-col gap-y-4`}>
          {/* Instagram */}
          <Pressable
            style={tw`flex-row gap-x-3 items-center border-b border-gray-200 pb-3`}
            onPress={() => console.log('Instagram')}
          >
            <Image
              source={require('../../../assets/instagram.png')}
              style={tw`w-10 h-10`}
            />
            <Text style={tw`text-lg text-gray-800`}>Follow us on Instagram</Text>
          </Pressable>

          {/* YouTube */}
          <Pressable
            style={tw`flex-row gap-x-3 items-center border-b border-gray-200 pb-3`}
            onPress={() => console.log('YouTube')}
          >
            <Image
              source={require('../../../assets/youtube.png')}
              style={tw`w-10 h-10`}
            />
            <Text style={tw`text-lg text-gray-800`}>Follow us on YouTube</Text>
          </Pressable>

          {/* Twitter */}
          <Pressable
            style={tw`flex-row gap-x-3 items-center border-b border-gray-200 pb-3`}
            onPress={() => console.log('Twitter')}
          >
            <Image
              source={require('../../../assets/xlogo.png')}
              style={tw`w-10 h-10`}
            />
            <Text style={tw`text-lg text-gray-800`}>Follow us on Twitter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
