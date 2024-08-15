// CustomCheckbox.js
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import tw from 'twrnc';


interface checkboxProps{
    isChecked:boolean,
    onPress: ()=>void,
    label:string,
    header:string,
}

const CustomCheckbox = ({ isChecked, onPress, label,header }:checkboxProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`flex-row items-center gap-x-3 py-3 px-2 mb-4 border-b border-gray-200`}>
      <View style={tw`w-6 h-6 border border-gray-400 rounded-full justify-center items-center`}>
        {isChecked && (
       <AntDesign name="checkcircle" size={20} color="blue" />
        )}
      </View>
     <View style={tw `flex-col  gap-y-2`}>
     <Text style={tw`ml-2 text-lg text-black`}>{header}</Text>
     <Text style={tw`ml-2 text-sm text-gray-400`}>{label}</Text>
     </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
