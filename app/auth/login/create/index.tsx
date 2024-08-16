import { OTPInputComp } from '@/components/Otp';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';

export default function CreatePin() {
  const [pin, setPin] = useState("");

  const handleNext = () => {
    router.push('/auth/login/create/confirm');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-4`}>
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`text-3xl font-bold text-center text-gray-800 mb-6`}>Create Pin</Text>
        
        <View style={tw`mb-6`}>
          <OTPInputComp digits={4} onChangeText={setPin} />
        </View>

        <TouchableOpacity
          onPress={handleNext}
          style={tw`bg-[#3E9850] py-4 rounded-lg shadow-lg`}
        >
          <Text style={tw`text-white text-center text-lg font-bold`}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
