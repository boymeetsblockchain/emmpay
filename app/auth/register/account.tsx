// Account.js
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import CustomCheckbox from '../../../components/customcheckbox'
export default function Account() {
  const [checkedItem, setCheckedItem] = useState(null);

  const handleCheck = (item:any) => {
    setCheckedItem(item);
  };

  return (
  <SafeAreaView style={tw`flex-1 mx-5 mt-20 relative`}>
      <Text style={tw`text-3xl font-bold text-center mb-4`}>Virtual Account Selection</Text>
      <Text style={tw`text-xl font-bold text-left mb-4 text-[#2E324B]`}>Select Account Type</Text>
      <Text style={tw`text-left text-justify text-lg text-[#43475D]`}>
        Please select the type of virtual account you would like to create. Each account type offers different features and benefits tailored to your needs. Make sure to review the details of each option before making your selection.
      </Text>
<View style={{marginTop:10}}>
<CustomCheckbox 
      header='Savings Account' 
        isChecked={checkedItem === 'savings'}
        onPress={() => handleCheck('savings')}
        label="Ideal for saving money with interest."
      />
      <CustomCheckbox 
      header='Checking Account' 
        isChecked={checkedItem === 'checking'}
        onPress={() => handleCheck('checking')}
        label="Perfect for daily transactions."
      />
      <CustomCheckbox 
      header='Business Account' 
        isChecked={checkedItem === 'business'}
        onPress={() => handleCheck('business')}
        label="Designed for business needs."
      />
      <CustomCheckbox 
      header='Student Account' 
        isChecked={checkedItem === 'student'}
        onPress={() => handleCheck('student')}
        label="Tailored for students with special benefits."
      />
</View>
<TouchableOpacity
          style={tw`bg-[#3E9850]  py-2 mb-4 absolute bottom-4 w-full` }
          // onPress={handleVerifyAccount}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>Verify Account</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
