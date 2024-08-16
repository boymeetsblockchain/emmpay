import { View, Text, Image, Pressable, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Profile() {
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
            source={require('../../../assets/home.png')}
            style={tw`w-24 h-24 rounded-full`}
          />
          <Text style={tw`text-2xl font-semibold`}>Divine Ikemma</Text>
          <Text style={tw`text-lg text-gray-500`}>@Divkemma</Text>
        </View>

        {/* Profile Details */}
        <View style={tw`flex-col gap-y-5 mb-10`}>
          {/* Full Name */}
          <Pressable style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}>
            <View>
              <Text style={tw`text-xl font-bold`}>Full Name</Text>
              <Text style={tw`text-sm text-gray-600`}>Divine Ikemma</Text>
            </View>
            <Ionicons name="pencil" size={24} color="black" />
          </Pressable>

          {/* Phone Number */}
          <Pressable style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}>
            <View>
              <Text style={tw`text-xl font-bold`}>Phone Number</Text>
              <Text style={tw`text-sm text-gray-600`}>08737373729</Text>
            </View>
            <Ionicons name="pencil" size={24} color="black" />
          </Pressable>

          {/* Email */}
          <Pressable style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}>
            <View>
              <Text style={tw`text-xl font-bold`}>Email</Text>
              <Text style={tw`text-sm text-gray-600`}>divineikemma@gmail.com</Text>
            </View>
            <Ionicons name="pencil" size={24} color="black" />
          </Pressable>

          {/* Gender */}
          <Pressable style={tw`flex-row justify-between items-center p-4 bg-gray-100 rounded-lg`}>
            <View>
              <Text style={tw`text-xl font-bold`}>Gender</Text>
              <Text style={tw`text-sm text-gray-600`}>Female</Text>
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
              pressed && tw`bg-gray-200`
            ]}
          >
            <View>
              <Text style={tw`text-xl font-bold`}>Settings</Text>
              <Text style={tw`text-sm text-gray-600`}>Control your notification and security settings</Text>
            </View>
          </Pressable>

          {/* Get Help */}
          <Pressable
            onPress={() => console.log('Get Help Pressed')}
            style={({ pressed }) => [
              tw`p-4 bg-gray-100 rounded-lg`,
              pressed && tw`bg-gray-200`
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
