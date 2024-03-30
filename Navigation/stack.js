import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../mainscreens/SplashScreen';
import LandingPage from '../mainscreens/LandingPage';
import LoginPage from '../mainscreens/LoginPage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';
import { View } from 'react-native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="testpage" component={Test} /> */}
      <Stack.Screen name="landing" component={LandingPage} />
      <Stack.Screen name="login" component={LoginPage} />
      {/* <TabNavigator/> */}
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={SplashScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Landing"
        component={LandingPage}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginPage}
        options={{
          tabBarLabel: 'Aboutus',
          tabBarIcon: ({color, size}) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function stack() {
  return (
    <NavigationContainer>

{/* <View>
  <Text>tesadsa</Text>
  
</View> */}

<StackNavigator />
      
    </NavigationContainer>
  );
}
