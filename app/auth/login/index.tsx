import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

export default function Login() {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Navigate to the next page on successful login
    router.push('/auth/login/create');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    Alert.alert("Forgot Password", "Reset password instructions will be sent.");
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-6`}>
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`text-4xl font-bold text-center text-gray-800 mb-6`}>Log In</Text>
        
        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-semibold text-gray-700 mb-2`}>Phone No / Email</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-3 rounded-lg bg-gray-50`}
            placeholder="Enter Phone No or Email"
            value={phoneOrEmail}
            onChangeText={setPhoneOrEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-semibold text-gray-700 mb-2`}>Password</Text>
          <TextInput
            style={tw`border border-gray-300 px-4 py-3 rounded-lg bg-gray-50`}
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={tw`text-[#3E9850] text-right text-lg font-semibold`}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={tw`mt-8`}>
          <TouchableOpacity
            style={tw`bg-[#3E9850] py-3 rounded-lg`}
            onPress={handleLogin}
          >
            <Text style={tw`text-white text-center text-lg font-semibold`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
