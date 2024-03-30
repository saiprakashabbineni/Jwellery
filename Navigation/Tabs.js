// Tabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../Screens/Home'
import Aboutus from '../Screens/Aboutus';
import Categories from '../Screens/Categories';
import Reels from '../Screens/Reels';
import Profile from '../Screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BTabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}  >
      <Tab.Screen
       name="k"
        component={Homepage}
        options={{

      
        tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Aboutus"
        component={Aboutus}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: 'Reels',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tag" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BTabs;
