import BackButton from '@/components/backbutton'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';
import tw from 'twrnc'
import { router } from 'expo-router';



export default function TransferPage() {
    const snapPoints = useMemo(() => ['40%'], []);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleClosePress = () => bottomSheetRef.current?.close();
    const handleOpenPress = () => bottomSheetRef.current?.expand();


  return (
    <SafeAreaView style={tw `flex-1 px-5 pt-10 `}>
    <View style={tw `flex-row gap-x-10`}>
            <BackButton/>
          <Text style={tw`text-2xl font-bold text-center ml-8 mb-4`}>Send</Text>
          </View>
          <View style={tw `items-center justify-center my-10`}>
            <Text style={tw `text-sm bg-[#C9D0FF] py-1.5 px-2 rounded-md text-center w-[200px]`}>Available Balance: $1,565,520.57</Text>
          </View>
          <View>
            <Text style={tw `font-bold text-2xl `}>Amount</Text>
            <TextInput placeholder='' style={tw`py-2 border rounded-lg px-3 text-sm `} />
          </View>
             <View style={{marginVertical:20}}>
             <Text style={tw `font-bold text-2xl `}>Description</Text>
            <View style={tw `relative`}>
            <TextInput placeholder='First Bank' style={tw`py-2 border rounded-lg px-3 text-sm `} />
            <Entypo name="chevron-down" size={20} color="black"  style={tw  ` absolute top-2 right-2`} />
            <View/>
            </View>
        
          </View>
         <View style={tw `justify-between flex-row`}>
         <Text style={tw `font-bold text-2xl `}>Fee:</Text>
         <Text style={tw ` text-sm `}>NGN 0.00</Text>
         </View>
         <BottomSheet index={0} snapPoints={snapPoints}>
              <View style={tw `flex-row mx-4 items-center justify-between`}>
                <View>
                    <Pressable onPress={handleClosePress}>
                        <Text style={tw `text-2xl font-bold` }>X</Text>
                    </Pressable>
                </View>
             
            <Text style={tw `font-bold text-2xl  text-center`}>Payment Method</Text>
            <View/>
              </View>
              <View style={tw `flex-col my-10 gap-y-4`}>
               <TouchableOpacity style={tw `px-10   py-3 shadow-sm`}>
               <Text style={tw `font-bold text-2xl `}>Debit Card</Text>
                 
                <Entypo name="chevron-right" size={20} color="black"  style={tw  ` absolute top-2 right-2`} /> 
               </TouchableOpacity>
               <TouchableOpacity style={tw `px-10   py-3 shadow-sm`}>
               <Text style={tw `font-bold text-2xl `}>Wallet Balance</Text>
                 
                <Entypo name="chevron-right" size={20} color="black"  style={tw  ` absolute top-2 right-2`} /> 
               </TouchableOpacity>
              </View>

</BottomSheet>
          <TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4  absolute bottom-2  left-5  w-full` }
        >
       <Pressable onPress={()=>router.push('/transfer/confirmation')}>
       <Text style={tw`text-white text-center text-lg font-semibold`}>Done</Text>
       </Pressable>
        </TouchableOpacity>
    </SafeAreaView>
  )
}