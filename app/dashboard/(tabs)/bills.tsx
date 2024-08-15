import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';

export default function Bills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bill Payment</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for anything"
        />
        <Ionicons name="search" size={24} color="black" />
      </View>
      <Text style={styles.essentials}>Essentials</Text>
      <Image
        source={require('../../../assets/bill.png')}
        style={styles.billImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  essentials: {
    fontSize: 16,
    marginBottom: 10,
  },
  billImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});
