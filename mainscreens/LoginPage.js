import { View, Text , Button} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const LoginPage = () => {

  const nav = useNavigation()
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
       <Text>Hey Login Page</Text>
       <Button title="go to landing page" onPress={() => nav.navigate("landing")} />
    </View>
  )
}

export default LoginPage;