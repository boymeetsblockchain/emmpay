import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import tw from 'twrnc'
import { router } from 'expo-router';
export default function Cards() {
  return (
    <View style={tw `flex-1 mt-10 px-5 bg-white relative`}>
       <Text style={tw`text-2xl text-center mb-3 font-bold`} >Usd Card</Text>
       <View>
       <Image
              source={require('../../../assets/card.png')} 
              style={tw`w-full rounded-md`} 
            />
       </View>
       <Text style={tw `text-4xl font-bold  my-10 `}>
       Emmpay card Built for Your Digital Life
       </Text>
       <View style={tw `flex-col gap-y-4 pr-10`}>
        <View style={tw `flex-row gap-x-3`}>
        <Fontisto name="world-o" size={24} color="black" />
        <View>
          <Text style={tw `font-bold text-lg mb-2 capitalize`}>shop globally</Text>
          <Text style={tw ` text-sm`}>Use your Orbit Card for online purchase anywhere Visa cards are accepted</Text>
        </View>
        </View>
        <View style={tw `flex-row gap-x-3`}>
        <SimpleLineIcons name="pie-chart" size={24} color="black" />
        <View>
          <Text style={tw `font-bold text-lg mb-2 capitalize`}>budget effectively</Text>
          <Text style={tw ` text-sm`}>Limit spending by only using the amount uploaded to your card</Text>
        </View>
        </View>
       </View>
       <Text style={tw `text-center text-[#3E9850]  font-bold text-xl my-3`}>
       Terms and Conditions
       </Text>
       <TouchableOpacity style={tw `bg-[#3E9850] w-full mt-5 py-3 rounded-md absolute bottom-2 left-4 `}>
        <Pressable onPress={()=>router.push('/cards/')}>
        <Text style={tw `text-white text-center text-xl`}>Claim My Card</Text>
        </Pressable>
       </TouchableOpacity>
    </View >
  )
}