/*Components*/
import { Tabs } from 'expo-router';
import React from 'react';
import Footer from '@/components/Footer';
/*Icons*/
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['dark' ?? 'light'].tint,
        headerShown: false,
      }}>    
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name = 'products'
        options={{
            title : 'Products',
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'logo-apple' : 'logo-apple'} color={color}/>
            )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart Products',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aboutUs"
        options={{
          title: 'About Us',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information' : 'information-outline'} color={color} />
          ),
        }}
      />      
    </Tabs>
  );
}
