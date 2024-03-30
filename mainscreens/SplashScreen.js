import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'

const Tab = createBottomTabNavigator();
const SplashScreen = () => {
  
 
  const nav = useNavigation();


  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text >splashscreen Page</Text>

      <Button title="Go to login" onPress={() => nav.navigate("login")} />

      {/* <TabNavigator/> */}
    </View>
  )
}

export default SplashScreen;


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