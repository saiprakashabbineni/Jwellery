import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from './FrontPage/Welcome'
import SignUp from "./FrontPage/SignUp";
import Login from './FrontPage/Loginyt'


const Stack = createStackNavigator();

function Firstpage () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
               <Stack.Screen name="Welcome" component={Welcome}/>
               <Stack.Screen name="SignUp" component={SignUp}/>
               <Stack.Screen name="Login"  component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Firstpage;