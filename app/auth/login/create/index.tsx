import { OTPInputComp } from '@/components/Otp';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function CreatePin() {
  const [pin, setPin] = useState("");

  const handleNext = () => {
    router.push('/auth/login/create/confirm');
  };

  return (
    <SafeAreaView style={tw`flex-1  relative  `}>
      <Text style={tw`text-3xl font-bold text-center mb-6`}>Create Pin</Text>
      <View style={tw`mb-6`}>
        <OTPInputComp digits={4} onChangeText={setPin} />
      </View>
      <TouchableOpacity
        onPress={handleNext}
        style={tw`bg-[#3E9850] py-4 px-2 absolute bottom-0  w-full  flex items-center`}
      >
        <Text style={tw`text-white text-center text-lg font-bold`}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
