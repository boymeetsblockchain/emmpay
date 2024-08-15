import { EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import tw from 'twrnc';

const data = [
  { type: "NiN", value: "Nin" },
  // Add more items if needed
];

export default function Facial() {
  const handleNext = () => {
    router.push('/auth/register/account');
  };

  return (
    <View style={tw`flex-1 mx-10 mt-20 relative`}>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-4xl font-bold text-center mb-4`}>Verify</Text>
        <View style={tw`flex items-center my-10`}>
          <Image
            source={require('../../../assets/search.png')}
            style={tw`w-full `}
          />
        </View>
        <Text style={tw`text-center px-10 text-2xl`}>
          Verify your account to have complete benefit on the platform
        </Text>
      </View>
      
      <View style={tw`mt-5`}>
        <Text style={tw`text-lg mb-2`}>ID Type</Text>
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {selectedItem ? selectedItem.value : 'Select ID Type'}
              </Text>
              <EvilIcons
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          )}
          renderItem={(item, index, isSelected) => (
            <View style={[styles.dropdownItemStyle, isSelected && { backgroundColor: '#D2D9DF' }]}>
              <Text style={styles.dropdownItemTxtStyle}>{item.value}</Text>
            </View>
          )}
          dropdownStyle={styles.dropdownMenuStyle}
          showsVerticalScrollIndicator={false}
        />
         <Text style={tw` mb-2`}>NiN</Text>
        <TextInput placeholder='Please enter 11 digits NIN number' style={tw`border-b py-3 px-2`}/>
      </View>

      <TouchableOpacity
        style={tw`bg-[#3E9850] w-full py-2  mt-5 absolute bottom-2 `}
        onPress={handleNext}
      >
        <Text style={tw`text-white text-center text-lg font-semibold`}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
    color: '#151E26',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    marginTop: 5,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
});
