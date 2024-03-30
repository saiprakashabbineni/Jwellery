import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LandingPage = () => {

  const nav = useNavigation();
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text>Hey Landing page</Text>
      <Button title="go to splashscreen" onPress={() => nav.navigate("Splash")}/>
    </View>
  )
}

export default LandingPage;