import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3E9850',
        tabBarStyle: { backgroundColor: 'white' },
        tabBarShowLabel: true, // Ensure labels are shown
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          tabBarLabel: 'Home', 
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="credit-card" color={color} />,
          tabBarLabel: 'Cards', 
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="money" color={color} />,
          tabBarLabel: 'Bills', 
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
}
