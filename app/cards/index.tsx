import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import BackButton from '@/components/backbutton'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
export default function Create() {
  return (
    <SafeAreaView style={tw `flex-1 px-5 pt-5 relative`}>

          <View style={tw `flex-row gap-x-10`}>
            <BackButton/>
          <Text style={tw`text-2xl font-bold text-center mb-4`}>Choose Card</Text>
          </View>
          <View style={tw `mb-4`}>
          <Image
              source={require('../../assets/credit.png')} 
              style={tw`w-full rounded-md`} 
            />

          </View>
          <View >
           <View style={tw `flex-row justify-between`}>
           <Text style={tw`text-2xl font-bold text-center mb-4`}>Other Cards</Text>
           <Ionicons name="add-sharp" size={24} color="black" />
           </View>
           <View style={tw `flex-col my-4 gap-y-4`}>
             <View style={tw `flex-row justify-between items-center`}>
                <View style={tw `h-5 w-5 border items-center justify-center rounded-full`}>
                   <View style={tw `h-3 w-3 bg-orange-400 rounded-full`}>

                   </View>
                </View>
                <View style={tw `flex-row gap-x-3 items-center justify-center`}>
                    <Image     source={require('../../assets/master.png')} 
              style={tw` rounded-md ml-9`} />
                <Text style={tw`text-sm`}>Mastercard</Text>
                </View>
                <Text style={tw`text-sm`}>
                **** **** 2823
                </Text>
              
             </View>
             <View style={tw `flex-row justify-between items-center`}>
                <View style={tw `h-5 w-5 border items-center justify-center rounded-full`}>
                 
                </View>
                <View style={tw `flex-row gap-x-3 items-center justify-center`}>
                    <Image     source={require('../../assets/visa.png')} 
              style={tw` rounded-md`} />
                <Text style={tw`text-sm`}>Visa</Text>
                </View>
                <Text style={tw`text-sm`}>
                **** **** 2823
                </Text>
              
             </View>
             <View style={tw `flex-row justify-between items-center`}>
                <View style={tw `h-5 w-5 border items-center justify-center rounded-full`}>
                   
                </View>
                <View style={tw `flex-row gap-x-3 items-center justify-center`}>
                    <Image     source={require('../../assets/amex.png')} 
              style={tw` rounded-md`} />
                <Text style={tw`text-sm`}>Debit</Text>
                </View>
                <Text style={tw`text-sm`}>
                **** **** 2823
                </Text>
              
             </View>
           </View>
          </View>
       
           <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4  absolute bottom-2  left-5  w-full` }
        >
       <Pressable onPress={()=>router.push('/cards/choose')}>
       <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
       </Pressable>
        </TouchableOpacity>
           
    </SafeAreaView>
  )
}