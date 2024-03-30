import {
  View,
  
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Component, useRef, useState, useEffect} from 'react';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import { Button, Avatar, Searchbar, Card} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {PicCenterOutlined, TrademarkCircleOutlined} from '@ant-design/icons';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../Navigation/Tabs';


import Home from '../Screens/Home'

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../Screens/Profile';
import Categories from '../Screens/Categories';
import Aboutus from '../Screens/Aboutus';
import Reels from '../Screens/Reels';

const Tab = createBottomTabNavigator();

const Test = () => {
  const screenWidth = Dimensions.get('window').width;
  const [searchQuery, setSearchQuery] = React.useState('');
  const carouselRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState(3000);
  const buttonRef = useRef(null);
  const [userData, setUserData] = useState([0]);

  const Tab = createBottomTabNavigator()
  
  const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  //   { key: 'albums', title: 'Albums', focusedIcon: 'album' },
  //   { key: 'recents', title: 'Recents', focusedIcon: 'history' },
  //   { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  // ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Home,
    albums: Home,
    recents: Home,
    notifications: Home,
  });
  

 
  return (
    <NavigationContainer>

   
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 22 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
                return <Icon name="home" size={size} color={color} />;
                
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
        />
        <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
        />
        <Tab.Screen
        name="Aboutus"
        component={Aboutus}
        options={{
          tabBarLabel: 'Aboutus',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
        />
        <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: 'Reels',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="shape" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Test;

