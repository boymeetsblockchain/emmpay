import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const router = useRouter()

  const handleNext = () => {
    // Handle the registration logic here
    router.push('/auth/register/password')
    console.log({ firstName, surname, email, phone, gender });

  };

  return (
    <SafeAreaView style={tw`flex-1 p-4  flex-col gap-y-3 mt-20`}>
      <Text style={tw`text-3xl font-extrabold  text-center  mb-4`}>Basic Information</Text>

      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold`}>First Name</Text>
        <TextInput
          style={tw`border border-[#0000004D]  px-3 py-2 rounded`}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Legal Surname</Text>
        <TextInput
          style={tw`border border-[#0000004D] px-3 py-2 rounded`}
          placeholder="Please enter your legal surname"
          value={surname}
          onChangeText={setSurname}
        />
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Enter your email</Text>
        <TextInput
          style={tw`border border-[#0000004D]  px-3 py-2 rounded`}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Phone Number</Text>
        <View style={tw`flex-row items-center border border-[#0000004D]  px-3 py-2 rounded`}>
          <Text style={tw`mx-3 text-lg`}>🇳🇬 +234</Text>
          <TextInput
            style={tw`flex-1`}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Select Gender</Text>

        <Picker
          selectedValue={gender}
          
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <TouchableOpacity
        onPress={handleNext}
        style={tw`bg-[#3E9850] p-4 rounded`}
      >
        <Text style={tw`text-white text-center text-lg font-bold`}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
});