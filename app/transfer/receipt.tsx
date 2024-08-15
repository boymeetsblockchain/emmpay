import { View, Image,SafeAreaView,Text, TouchableOpacity, Pressable } from 'react-native'
import BackButton from '@/components/backbutton'
import tw from 'twrnc'
import { router } from 'expo-router'
export default function Receipt() {
  return (
    <SafeAreaView style={tw `px-5 py-10 flex-1 relative `}>
      
    <View style={tw `flex-row gap-x-10`}>
        <BackButton/>
      <Text style={tw`text-2xl font-bold text-center ml-8 mb-4`}>Receipt</Text>
      </View>
    <View style={tw `items-center justify-center`}>
          
      <Image
              source={require('../../assets/receipt.png')} 
              style={tw`w-60 rounded-md`} 
            />
    </View>
    <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4  absolute bottom-2  left-5  w-full` }
        >
       <Pressable onPress={()=>router.push('/dashboard')}>
       <Text style={tw`text-white text-center text-lg font-semibold`}>Share Receipt</Text>
       </Pressable>
        </TouchableOpacity>
    </SafeAreaView>
  )
}