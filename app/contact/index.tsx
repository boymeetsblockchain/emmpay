import { View, Text,SafeAreaView, Image } from 'react-native'
import tw from 'twrnc'
import BackButton from '@/components/backbutton'
export default function Contact() {
  return (
    <SafeAreaView style={tw`flex-1 px-5 pt-10 relative`}>
    <View style={tw`flex-row items-center mb-8`}>
      <BackButton />
      <Text style={tw`text-2xl font-bold text-center mr-20 flex-1`}>Contact Us</Text>
    </View>
    <View style={tw `my-10 items-center justify-center `}>
      <Text style={tw `text-[#616161] text-lg mb-20`}>You can contact us through any of these medium </Text>
      <View style={tw `flex-row  items-center  my-5 px-10 shadow-sm`}>
      <Image source={require('../../assets/facebook.jpeg')} style={tw`mr-2 h-10 w-10 rounded-full` } />
      <Text style={tw `text-lg font-bold`}>Continue with Google</Text>
      </View>
      <View style={tw `flex-row  items-center  my-5 px-10 shadow-sm`}>
      <Image source={require('../../assets/google.png')} style={tw`mr-2 h-10 w-10`} />
      <Text style={tw `text-lg font-bold`}>Continue with Google</Text>
      </View>
      <View style={tw `flex-row  items-center  my-5 px-10 shadow-sm`}>
      <Image source={require('../../assets/google.png')} style={tw`mr-2 h-10 w-10`} />
      <Text style={tw `text-lg font-bold`}>Continue with Google</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}