import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp page</Text>
      <Button title="signup" onPress={() => Navigation.navigae("Login")}/>

    </View>
  )
}

export default SignUp