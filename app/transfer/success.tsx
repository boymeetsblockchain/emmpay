import { router } from 'expo-router'
import { View, Text,SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native'
import tw from 'twrnc'
export default function success() {
  return (
    <SafeAreaView style={tw `flex-1 py-10 px-5  `}>
       <Text style={tw ` text-2xl font-bold`}>X</Text>
       <View style={tw `items-center justify-center`}>
       {/* <Image
              source={require('../../assets/success.png')} 
              style={tw`w-50 rounded-md`} 
            /> */}
            <Text style={tw `text-center text-2xl my-4 `}>Success</Text>
            <Text style={tw `text-center text-sm my-4 `}>You payment has been successfully </Text>
            
       </View>
       <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4  absolute bottom-2  left-5  w-full` }
        >
       <Pressable onPress={()=>router.push('/transfer/receipt')}>
       <Text style={tw`text-white text-center text-lg font-semibold`}>Share Receipt</Text>
       </Pressable>
        </TouchableOpacity>

    </SafeAreaView>
  )
}