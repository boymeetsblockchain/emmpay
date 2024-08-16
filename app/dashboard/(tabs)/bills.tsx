import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Bills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bill Payment</Text>
      
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for anything"
        />
        <Ionicons name="search" size={24} color="black" />
      </View>

      {/* Essentials Section */}
      <Text style={styles.essentials}>Essentials</Text>
      
      {/* Icons representing different services */}
      <View style={styles.iconsContainer}>
        <Pressable onPress={()=>router.push("/payment/airtime/")} style={styles.iconBox}>
          <Ionicons name="call" size={32} color="#F56A79" />
          <Text style={styles.iconLabel}>Phone</Text>
        </Pressable >
        <Pressable onPress={()=>router.push("/payment/data/")} style={styles.iconBox}>
          <Ionicons name="wifi" size={32} color="#3E9850" />
          <Text style={styles.iconLabel}>Wi-Fi</Text>
        </Pressable >
        <Pressable onPress={()=>router.push("/payments/")} style={styles.iconBox}>
          <Ionicons name="tv" size={32} color="#5E60CE" />
          <Text style={styles.iconLabel}>TV</Text>
        </Pressable >
        <Pressable onPress={()=>router.push("/payments/")} style={styles.iconBox}>
          <Ionicons name="bulb" size={32} color="#F4A261" />
          <Text style={styles.iconLabel}>Electricity</Text>
        </Pressable >
      </View>
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
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  essentials: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  iconLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },
});
