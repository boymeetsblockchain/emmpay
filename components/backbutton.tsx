import { View, Text, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
export default function BackButton() {
  return (
    <Pressable onPress={()=>router.back()}>
     <Entypo name="chevron-left" size={24} color="black" style={{marginRight:50}} />
    </Pressable>
  )
}