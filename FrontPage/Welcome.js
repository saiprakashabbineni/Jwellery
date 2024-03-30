import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const Welcome = () => {
  const nav=useNavigation();
  return (
    <View>
      <Text>Welcome scren</Text>
      <Button variant="contained" onPress={()=> nav.navigate("SignUp")}>Contained</Button>
    </View>
  )
}

export default Welcome