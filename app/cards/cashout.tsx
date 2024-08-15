import { View, Text, Image, TouchableOpacity, Pressable, TextInput } from 'react-native'
import BackButton from '@/components/backbutton'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
export default function Create() {
  return (
    <SafeAreaView style={tw `flex-1 px-5 pt-5 relative`}>

          <View style={tw `flex-row gap-x-10`}>
            <BackButton/>
          <Text style={tw`text-2xl font-bold text-center mb-4`}>Cashout </Text>
          </View>
          <View style={tw `mb-4`}>
          <Image
              source={require('../../assets/credit.png')} 
              style={tw`w-full rounded-md`} 
            />

          </View>
         
         <View style={tw `flex-col gap-y-3 mb-10`}>
            <View>
                <Text style={tw `mb-3`}>Holder Name</Text>
                <TextInput placeholder='Jason Doung' style={tw`py-2 border rounded-lg px-3 text-sm `} />
            </View>
            <View>
                <Text style={tw `mb-3`}>Card Number</Text>
              <View style={tw`relative`}>
              <TextInput placeholder='3,200' style={tw`py-2 border rounded-lg px-10 text-sm `} />
              <FontAwesome6 name="credit-card" size={20} color="gray" style={tw `absolute top-3 left-2 `} />
              </View>
            </View>
         </View>

         {/* <View style={tw `flex-row justify-between mb-10`}>
         <View>
                <Text style={tw `mb-3`}>MM/YY</Text>
              <View style={tw`relative`}>
              <TextInput placeholder='10/3' style={tw`py-2 border rounded-lg px-3 w-[120px] text-sm `} />
              <AntDesign name="calendar" size={24} color="grey" style={tw `absolute top-3 right-2 `}  />
              </View>
            </View>
            <View>
                <Text style={tw `mb-3`}>CVC</Text>
              <View style={tw`relative`}>
              <TextInput placeholder='000' style={tw`py-2 border rounded-lg px-3 w-[120px] text-sm `} />
              <AntDesign name="exclamationcircleo" size={24} color="grey" style={tw `absolute top-3 right-2 `}  />
              </View>
            </View>
         </View> */}
       
           <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4  absolute bottom-2  left-5  w-full` }
        >
       <Pressable onPress={()=>router.push('/cards/cashout/')}>
       <Text style={tw`text-white text-center text-lg font-semibold`}>Done</Text>
       </Pressable>
        </TouchableOpacity>
           
    </SafeAreaView>
  )
}